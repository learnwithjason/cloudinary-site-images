import { imageService } from '@unpic/astro/service';
import { defineConfig } from 'astro/config';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    service: imageService()
  },
  integrations: [db()]
});