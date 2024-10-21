// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        ATOMIC_SERVER_URL: envField.string({
          context: 'client',
          access: 'public',
          optional: false,
        }),
        ATOMIC_WEBSITE_SUBJECT: envField.string({
          context: 'client',
          access: 'public',
          optional: false,
        }),
      },
    },
  },
});
