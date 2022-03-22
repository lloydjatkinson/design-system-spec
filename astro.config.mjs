import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	renderers: ['@astrojs/renderer-vue'],
	buildOptions: {
		site: 'https://design-system-spec-lloyd.netlify.app',
	}
});