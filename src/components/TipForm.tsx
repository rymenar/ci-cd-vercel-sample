"use client";
import { useState } from "react";
import { calcSplit } from "@/lib/tip";

export default function TipForm() {
  const [bill, setBill] = useState("100");
  const [tipPct, setTipPct] = useState("10");
  const [people, setPeople] = useState("2");
  const [result, setResult] = useState<{ perPerson: number; total: number }>();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(calcSplit({
      bill: Number(bill), tipPct: Number(tipPct), people: Number(people)
    }));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label className="block text-sm">Bill</label>
        <input className="border p-2 w-full" value={bill} onChange={e=>setBill(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm">Tip %</label>
        <input className="border p-2 w-full" value={tipPct} onChange={e=>setTipPct(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm">People</label>
        <input className="border p-2 w-full" value={people} onChange={e=>setPeople(e.target.value)} />
      </div>
      <button className="border px-3 py-2 rounded" type="submit">Calculate</button>
      {result && (
        <div aria-live="polite" className="text-sm">
          Total: {result.total.toFixed(2)} • Per person: {result.perPerson.toFixed(2)}
        </div>
      )}
    </form>
  );
}
