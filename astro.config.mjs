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
        provider: fontProviders.google(),
        name: "Coming Soon",
        cssVariable: '--font-coming-soon',
        styles: ["normal"]
      },
      {
        provider: fontProviders.bunny(),
        name: "BIZ UDGothic",
        cssVariable: '--font-biz-udgothic',
        styles: ["normal"],
        weights: [400],
      }
    ]
  }
});