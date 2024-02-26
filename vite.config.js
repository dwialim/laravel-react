import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import dns from 'dns';
import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
	// build: {
	// 	outDir: 'build'
	// },
	plugins: [
		react(),
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.js'],
			refresh: true,
		}),
	],
	server: {
		host: '192.168.2.251', // Add this to force IPv4 only
		// host: true, // Add this to force IPv4 only
		// hmr: {
		// 	host: 'localhost',
		// },
	},
});
