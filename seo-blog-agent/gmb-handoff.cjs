const { makeId, nowIso } = require("./models.cjs");

function createGmbDraft(blogDraft, publishedUrl) {
  return {
    id: makeId("gmb"),
    blog_draft_id: blogDraft.id,
    status: "draft",
    title: blogDraft.title,
    city: blogDraft.city,
    service: blogDraft.service,
    published_url: publishedUrl,
    body: `${blogDraft.gmb_post_summary}\n\nRead the guide:\n${publishedUrl}`,
    created_at: nowIso(),
  };
}

module.exports = {
  createGmbDraft,
};
