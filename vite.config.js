import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Canina_Lingua/', //à ne pas toucher sauf si on veut que l'url soit accessible à une route particulière (exemple : jhochart0.github.io/suivi_candidatures/*routes*)
})
