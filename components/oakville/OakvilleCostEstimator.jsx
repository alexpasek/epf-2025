'use client';
import { useState } from 'react';
import { cad, estimateOakvilleCeiling, oakvillePricing } from '@/lib/oakvilleCeilingPricing.mjs';

export default function OakvilleCostEstimator() {
  const [values, setValues] = useState({ area: '500', condition: 'unsure', height: 'standard', repairs: 'minor', finish: 'primer' });
  const estimate = estimateOakvilleCeiling(values);
  function update(event) { setValues({ ...values, [event.target.name]: event.target.value }); }
  const fields = [
    ['condition', 'Ceiling condition', [['unpainted', 'Unpainted'], ['painted', 'Painted'], ['unsure', 'Not sure']]],
    ['height', 'Ceiling height', [['standard', 'Standard'], ['high', 'High / stairwell / vaulted']]],
    ['repairs', 'Repairs', [['minor', 'Normal / minor'], ['visible', 'Visible cracks, water damage or tape issues'], ['unsure', 'Not sure']]],
    ['finish', 'Finish', [['primer', 'Smooth + primer'], ['paint', 'Smooth + primer + ceiling painting']]],
  ];
  return <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-8">
    <h3 className="text-2xl font-bold">Oakville Popcorn Ceiling Cost Estimator</h3>
    <p className="mt-3">Start with ceiling area, not the home’s floor area. The published Level 5 allowance is ${oakvillePricing.smooth[0]}–${oakvillePricing.smooth[1]} per sq ft; condition and access still need review.</p>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="font-semibold" htmlFor="oakville-area">Ceiling area in sq ft<input id="oakville-area" name="area" type="number" min="1" max="100000" step="any" inputMode="decimal" value={values.area} onChange={update} aria-describedby="oakville-estimate" className="mt-2 block w-full rounded-lg border border-slate-400 bg-white p-3" /></label>
      {fields.map(([name, title, options]) => <div key={name}><label htmlFor={`oakville-${name}`} className="font-semibold">{title}</label><select id={`oakville-${name}`} name={name} value={values[name]} onChange={update} className="mt-2 block w-full min-w-0 rounded-lg border border-slate-400 bg-white p-3">{options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>)}
    </div>
    <div id="oakville-estimate" role="status" aria-live="polite" aria-atomic="true" className="mt-6 rounded-xl bg-white p-5">
      <p className="font-semibold">Estimated planning range</p>
      {estimate ? <><p className="mt-2 text-3xl font-bold text-blue-900">{cad(estimate.low)}–{cad(estimate.high)} CAD</p><p>+ HST where applicable</p><ul className="mt-4 list-disc space-y-2 pl-5 text-sm">{estimate.notes.map(note => <li key={note}>{note}</li>)}</ul></> : <p>Enter a ceiling area between 1 and 100,000 sq ft.</p>}
    </div>
    <p className="mt-4 text-sm">This is a planning estimate only. Final pricing depends on ceiling condition, paint layers, repairs, access, fixture count and on-site inspection or detailed photos.</p>
    <noscript>Interactive calculations require JavaScript. Use the published room budgets below or request a written quote.</noscript>
  </div>;
}
