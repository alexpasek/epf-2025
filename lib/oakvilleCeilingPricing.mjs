// Existing EPF sources before the Oakville consolidation (2026-09-30):
// Oakville/page.jsx: room budgets. Falgarwood/page.jsx: Level 5 $5.75–$9.75/sq ft.
// College Park/page.jsx: primer + ceiling paint $0.90–$1.60/sq ft.
// No validated area thresholds, height multipliers or repair surcharges exist.
export const oakvillePricing = {
  smooth: [5.75, 9.75],
  primerAndPaint: [0.9, 1.6],
  rooms: [
    ['Standard bedroom', 800, 1400, 'Unpainted texture, Level 5 skim and primer'],
    ['Painted bedroom', 1200, 1900, 'Bond/skim approach, primer and touch-ups'],
    ['Living room', 1500, 2600, 'Removal or skim, repairs and prime-ready finish'],
    ['Two-storey foyer', 2200, 4000, 'Platform setup, high-wall protection and Level 5'],
    ['Main floor', 4500, 8500, 'Open ceilings, halls and multiple rooms; can exceed this range'],
    ['Ceiling paint per room', 200, 500, 'Additional room-based allowance; do not add to the per-area finish allowance'],
  ],
};
export function estimateOakvilleCeiling({ area, condition, height, repairs, finish }) {
  const squareFeet = Number(area);
  if (!Number.isFinite(squareFeet) || squareFeet < 1 || squareFeet > 100000) return null;
  const paint = finish === 'paint' ? oakvillePricing.primerAndPaint : [0, 0];
  return {
    low: Math.round(squareFeet * (oakvillePricing.smooth[0] + paint[0])),
    high: Math.round(squareFeet * (oakvillePricing.smooth[1] + paint[1])),
    notes: [
      'Area-based allowance only. Small rooms may use the room budgets below because setup does not scale with area. Primer scope must be confirmed in the written quote.',
      condition !== 'unpainted' && 'Painted or uncertain texture needs assessment: the method and paint layers may increase the price.',
      height !== 'standard' && 'High, stairwell or vaulted access is not priced into this range; a separate access allowance is required.',
      repairs !== 'minor' && 'Repair work needs review and is not priced into this range. Resolve any active leak before refinishing.',
      finish === 'paint' && 'Includes the published primer-and-ceiling-paint allowance. Confirm coats and products; do not add the room paint allowance again.',
    ].filter(Boolean),
  };
}
export const cad = (value) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(value);
