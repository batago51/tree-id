# Определитель деревьев (React + Vite + Tailwind + PWA + Vercel)

## Локально
1. `npm install`
2. `cp .env.example .env`, вставьте `HF_TOKEN`
3. `npm i -g vercel && npm run dev` → http://localhost:3000 (фронт + `/api/identify`). Только UI: `npm run dev:ui`.
Камера и установка PWA работают по HTTPS, поэтому с телефона удобнее проверять задеплоенную версию.

## Деплой на Vercel
Залить в GitHub → vercel.com → Add New Project → в Environment Variables добавить `HF_TOKEN` → Deploy.
На телефоне: открыть сайт → «Добавить на главный экран».

## Расширение
- Новая порода: строка в `shared/trees.js`.
- Другая модель/API: файл в `api/_providers/` + строка в `api/_providers/index.js` + `RECOGNITION_PROVIDER`.
- Новая функция: компонент в `src/components/`, сервис в `src/services/` (например, история в IndexedDB).
