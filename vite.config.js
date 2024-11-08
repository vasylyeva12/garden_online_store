import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  envPrefix: 'APP_',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    }
  }
})

// const backendUrl = process.env.API_URL; //Создание переменной, в которую попадает адрес бэкенда из файла .env

// export default backendUrl;
