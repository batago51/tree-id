import { getProvider } from './_providers/index.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { imageBase64, mimeType = 'image/jpeg' } = req.body || {};
  if (!imageBase64) return res.status(400).json({ error: 'imageBase64 is required' });
  try {
    res.status(200).json(await getProvider().identify({ imageBase64, mimeType }));
  } catch (e) {
    console.error(e);
    res.status(502).json({ error: 'Не удалось распознать фото. Попробуйте ещё раз.' });
  }
}
