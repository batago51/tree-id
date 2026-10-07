const btn = 'flex-1 rounded-2xl py-4 text-base font-medium active:scale-[.98] transition-transform text-center cursor-pointer';

export default function PhotoPicker({ onPick, disabled }) {
  const handle = (e) => { const f = e.target.files?.[0]; if (f) onPick(f); e.target.value = ''; };
  const off = disabled ? 'opacity-50 pointer-events-none' : '';
  return (
    <div className="flex gap-3">
      <label className={`${btn} bg-moss text-paper ${off}`}>
        Сделать снимок
        <input type="file" accept="image/*" capture="environment" className="sr-only" onChange={handle} />
      </label>
      <label className={`${btn} border-2 border-moss text-moss ${off}`}>
        Из галереи
        <input type="file" accept="image/*" className="sr-only" onChange={handle} />
      </label>
    </div>
  );
}
