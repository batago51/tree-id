// Zero-shot классификация через CLIP на Hugging Face Inference API.
import { TREES, NON_TREES, treePrompt } from '../../shared/trees.js';

const MODEL = process.env.HF_MODEL || 'openai/clip-vit-large-patch14';
const URL = `https://router.huggingface.co/hf-inference/models/${MODEL}`;

export async function identify({ imageBase64 }) {
  const labels = [...TREES.map(treePrompt), ...NON_TREES];
  const res = await fetch(URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.HF_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputs: imageBase64, parameters: { candidate_labels: labels } }),
  });
  if (!res.ok) throw new Error(`HF ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const scores = new Map((await res.json()).map((r) => [r.label, r.score]));

  const species = TREES.map((t) => ({ id: t.id, label: t.ru, raw: scores.get(treePrompt(t)) ?? 0 }));
  const treeMass = species.reduce((s, x) => s + x.raw, 0);
  return {
    hasTree: treeMass >= 0.5,
    treeScore: treeMass,
    // уверенность в породе — доля внутри «древесной» массы
    top: species
      .map((x) => ({ id: x.id, label: x.label, score: treeMass ? x.raw / treeMass : 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3),
  };
}
