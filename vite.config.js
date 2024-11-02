import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// const backendUrl = process.env.API_URL; //Создание переменной, в которую попадает адрес бэкенда из файла .env

// export default backendUrl;
