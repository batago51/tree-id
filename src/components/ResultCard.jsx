const pct = (x) => `${Math.round(x * 100)}%`;

export default function ResultCard({ result }) {
  const [best, ...rest] = result.top;
  if (!result.hasTree) {
    return (
      <section className="rounded-2xl bg-white/70 p-5">
        <h2 className="font-display text-2xl">Дерева нет</h2>
        <p className="mt-1 text-bark/70">Уверенность, что на фото нет дерева: {pct(1 - result.treeScore)}</p>
      </section>
    );
  }
  return (
    <section className="rounded-2xl bg-white/70 p-5">
      <h2 className="font-display text-2xl">Дерево обнаружено</h2>
      <p className="mt-3 font-display text-4xl text-moss">{best.label}</p>
      <div className="mt-3 h-2 rounded-full bg-bark/10 overflow-hidden">
        <div className="h-full bg-leaf" style={{ width: pct(best.score) }} />
      </div>
      <p className="mt-1 text-sm text-bark/70">Уверенность в породе: {pct(best.score)}</p>
      {best.score < 0.4 && <p className="mt-2 text-sm">Модель не уверена — попробуйте снять листву или кору крупнее.</p>}
      <ul className="mt-4 space-y-1 text-sm text-bark/80">
        {rest.map((r) => <li key={r.id} className="flex justify-between"><span>{r.label}</span><span>{pct(r.score)}</span></li>)}
      </ul>
    </section>
  );
}
