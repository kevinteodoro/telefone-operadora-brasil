import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Substitua pelo nome EXATO do seu repositório:
  base: '/telefone-operadora-brasil/',
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === 'development' && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
