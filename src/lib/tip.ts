export type TipInput = { bill: number; tipPct: number; people: number };
export type TipResult = { perPerson: number; total: number };

export function calcSplit({ bill, tipPct, people }: TipInput): TipResult {
  if (!Number.isFinite(bill) || bill < 0) throw new Error("Bad bill");
  if (!Number.isFinite(tipPct) || tipPct < 0) throw new Error("Bad tipPct");
  if (!Number.isInteger(people) || people <= 0) throw new Error("Bad people");
  const tip = bill * (tipPct / 100);
  const total = bill + tip;
  const perPerson = Math.round((total / people) * 100) / 100;
  return { perPerson, total: Math.round(total * 100) / 100 };
}
