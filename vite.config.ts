import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins:[react(), VitePWA({
    registerType:'autoUpdate',
    includeAssets:['favicon.ico','icons/icon-192.png','icons/icon-512.png'],
    manifest:{ name:'BetSpread', short_name:'BetSpread', theme_color:'#10b981', background_color:'#0a0a0a', display:'standalone', start_url:'/', scope:'/', icons:[
      {src:'icons/icon-192.png', sizes:'192x192', type:'image/png'},
      {src:'icons/icon-512.png', sizes:'512x512', type:'image/png'}
    ]}
  })]
})