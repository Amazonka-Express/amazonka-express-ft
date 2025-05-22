import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$shared: './src/shared',
			$src: './src',
			$pb: './src/lib/server/pb',
			$alg: './src/alg/packing'
		}
	}
};

export default config;
