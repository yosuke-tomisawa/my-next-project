/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nestConfig = {
  sassOptions: {
    prependData: `@import "${path.resolve(__dirname, 'app/_variables.scss')}";`,
  },
}

export default nextConfig;