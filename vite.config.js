import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Определитель деревьев',
        short_name: 'Деревья',
        description: 'Определяет, есть ли на фото дерево, и его породу',
        lang: 'ru',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#EEF0E6',
        theme_color: '#2F4A2A',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      // /api/* никогда не кэшируем service worker'ом
      workbox: { navigateFallbackDenylist: [/^\/api\//] },
    }),
  ],
  server: { proxy: { '/api': 'http://localhost:3000' } },
});
