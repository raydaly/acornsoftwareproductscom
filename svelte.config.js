/** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte'
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: dev ? '' : '/acornsoftwareproducts',
		}
	}
};