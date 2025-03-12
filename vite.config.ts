import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(
  async () => {
    const UnoCss = await import('unocss/vite').then(i => i.default)
    return {
      plugins: [
        UnoCss(),
        uni(),
        AutoImport({
          imports: [
            'vue',
            'uni-app',
          ],
          dirs: [
            'src/utils/**'
          ],
          dts: 'src/auto-imports.d.ts',
          eslintrc: {
            enabled: true,
          },
        })
      ],
    }
  });
