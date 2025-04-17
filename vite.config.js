// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  //plugins: [react()], // Adicione outros plugins do Vite aqui, se necessário
  root: './', // Define a raiz do projeto (opcional, padrão é a raiz)
  publicDir: 'public', // Pasta para assets estáticos que devem ser copiados diretamente (opcional)
  build: {
    outDir: 'dist', // Diretório de saída para a build de produção (opcional, padrão é 'dist')
    assetsDir: 'assets', // Subdiretório para assets na build (opcional, padrão é 'assets')
    sourcemap: true, // Gera sourcemaps para debugging em produção (recomendado)
  },
  server: {
    port: 3000, // Porta do servidor de desenvolvimento (opcional, padrão é 5173)
    open: true, // Abre o navegador automaticamente ao iniciar (recomendado)
  },
});