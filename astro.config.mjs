// import { imageService } from '@unpic/astro/service';
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	image: {
		domains: ['res.cloudinary.com'],
		// service: imageService(),
	},
	integrations: [db()],
	adapter: netlify(),
});
