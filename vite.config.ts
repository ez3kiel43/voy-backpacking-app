import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		basicSsl(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'robots.txt'],
			manifest: {
				name: 'Voy Backpacking',
				short_name: 'Voy',
				start_url: '/',
				display: 'fullscreen',
				background_color: '#ffffff',
				theme_color: '#436565',
				icons: [
					{
						src: 'pwa-192icon.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512icon.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
});
