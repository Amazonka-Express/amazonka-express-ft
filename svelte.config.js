import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$shared: './src/shared',
			$src: './src',
			$alg: './src/alg/packing'
		}
	}
};

export default config;
