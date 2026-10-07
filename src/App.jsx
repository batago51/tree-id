import { useState } from 'react';
import PhotoPicker from './components/PhotoPicker';
import ResultCard from './components/ResultCard';
import { identifyTree } from './services/recognition';

export default function App() {
  const [preview, setPreview] = useState(null);
  const [state, setState] = useState({ status: 'idle' }); // idle | loading | done | error

  async function onPick(file) {
    setPreview(URL.createObjectURL(file));
    setState({ status: 'loading' });
    try { setState({ status: 'done', result: await identifyTree(file) }); }
    catch (e) { setState({ status: 'error', message: e.message }); }
  }

  return (
    <main className="mx-auto min-h-screen max-w-md space-y-5 px-4 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]">
      <header>
        <h1 className="font-display text-3xl text-moss">Что за дерево?</h1>
        <p className="text-bark/70">Сфотографируйте дерево — подскажем, что это за порода.</p>
      </header>
      {preview && <img src={preview} alt="Ваше фото" className="aspect-[4/3] w-full rounded-2xl object-cover" />}
      <PhotoPicker onPick={onPick} disabled={state.status === 'loading'} />
      {state.status === 'loading' && <p className="text-center text-bark/70">Смотрим на листву и кору…</p>}
      {state.status === 'error' && <p role="alert" className="rounded-2xl bg-red-100 p-4 text-red-900">{state.message}</p>}
      {state.status === 'done' && <ResultCard result={state.result} />}
    </main>
  );
}
