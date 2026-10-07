// Новый провайдер = новый файл с функцией identify({ imageBase64, mimeType })
// и одна строка здесь. Контракт ответа:
// { hasTree: boolean, treeScore: 0..1, top: [{ id, label, score }] }
import * as hfClip from './hfClip.js';

const providers = { 'hf-clip': hfClip /*, plantnet, claude, ... */ };

export const getProvider = () => {
  const p = providers[process.env.RECOGNITION_PROVIDER || 'hf-clip'];
  if (!p) throw new Error('Unknown RECOGNITION_PROVIDER');
  return p;
};
