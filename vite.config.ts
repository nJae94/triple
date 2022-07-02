import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path')

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      styles: path.resolve(__dirname, './src/styles'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      model: path.resolve(__dirname, './src/model'),
    },
  },
})
