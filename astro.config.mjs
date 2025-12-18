// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://acdfghijklmnopqruvw.xyz',
  integrations: [alpinejs()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google({
          experimental: {
            glyphs: {
              "Coming Soon": ["UX — best"],
            },
          },
        }),
        name: "Coming Soon",
        cssVariable: '--font-coming-soon',
        styles: ["normal"]
      }
    ]
  }
});