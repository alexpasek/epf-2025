// Simple in-memory chat store with follow-up scheduling (dev/local).
// For prod, swap to a DB or Cloudflare KV/D1. (We can add that later.)
const g = globalThis;
if (!g.__CHAT_STORE__) g.__CHAT_STORE__ = new Map(); // sessionId -> thread

export function getThread(sessionId) {
    if (!g.__CHAT_STORE__.has(sessionId)) {
        g.__CHAT_STORE__.set(sessionId, {
            messages: [], // [{role:'user'|'assistant', content, ts}]
            followups: [], // [{key, dueAt, sentAt, channel:'chat'|'email'}]
            lastActive: Date.now(),
            contact: { email: "", phone: "" },
            consent: { email: false, sms: false },
        });
    }
    return g.__CHAT_STORE__.get(sessionId);
}

export function saveThread(sessionId, data) {
    g.__CHAT_STORE__.set(sessionId, data);
}

export function recordMessage(sessionId, role, content) {
    const t = getThread(sessionId);
    t.messages.push({ role, content, ts: Date.now() });
    t.lastActive = Date.now();
    saveThread(sessionId, t);
}

export function setContact(sessionId, { email, phone, consent }) {
    const t = getThread(sessionId);
    t.contact = {
        email: email || t.contact.email,
        phone: phone || t.contact.phone,
    };
    t.consent = {...t.consent, ...(consent || {}) };
    saveThread(sessionId, t);
}

export function cancelFuture(sessionId) {
    const t = getThread(sessionId);
    t.followups = t.followups.map((f) =>
        f.sentAt ? f : {...f, sentAt: Date.now() }
    );
    saveThread(sessionId, t);
}

export function scheduleFollowups(sessionId, { email = true } = {}) {
    const t = getThread(sessionId);
    const base = Date.now();
    const plan = [
        { key: "idle-15m", afterMs: 15 * 60 * 1000, channel: "chat" }, // 15 minutes
        { key: "day-1", afterMs: 24 * 60 * 60 * 1000, channel: "chat" }, // 1 day
        { key: "day-3", afterMs: 3 * 24 * 60 * 60 * 1000, channel: "chat" },
        { key: "day-7", afterMs: 7 * 24 * 60 * 60 * 1000, channel: "chat" },
    ];
    if (email && t.consent.email && t.contact.email) {
        plan.push({
            key: "email-1",
            afterMs: 24 * 60 * 60 * 1000,
            channel: "email",
        });
        plan.push({
            key: "email-3",
            afterMs: 3 * 24 * 60 * 60 * 1000,
            channel: "email",
        });
    }
    const sent = t.followups.filter((f) => f.sentAt);
    t.followups = [
        ...sent,
        ...plan.map((p) => ({
            key: p.key,
            dueAt: base + p.afterMs,
            sentAt: 0,
            channel: p.channel,
        })),
    ];
    saveThread(sessionId, t);
}

export function runDue(sessionId) {
    const t = getThread(sessionId);
    const due = t.followups.filter((f) => !f.sentAt && f.dueAt <= Date.now());
    return { t, due };
}

export function markSent(sessionId, key) {
    const t = getThread(sessionId);
    const f = t.followups.find((x) => x.key === key && !x.sentAt);
    if (f) {
        f.sentAt = Date.now();
        saveThread(sessionId, t);
    }
}