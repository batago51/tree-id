import { fileToBase64 } from '../utils/image';

// Единственная точка, через которую UI общается с распознаванием.
// Сменить бэкенд (локальная модель, другой API) — правится только этот файл.
export async function identifyTree(file) {
  const imageBase64 = await fileToBase64(file);
  const res = await fetch('/api/identify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageBase64, mimeType: 'image/jpeg' }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Ошибка сервера');
  return data;
}
