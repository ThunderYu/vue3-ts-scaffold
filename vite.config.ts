import path from 'path';
import { UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
import { wrapperEnv } from './build/utils';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  // 当前执行node命令时文件夹的地址（工作目录）
  const root = process.cwd();
  // 加载并解析环境配置文件
  const { VITE_PORT, VITE_APP_TITLE } = wrapperEnv(loadEnv(mode, root));

  return {
    root,
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    server: {
      port: VITE_PORT,
      https: false,
      open: true,
      host: true
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
        dts: 'types/components.d.ts'
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true
        }
      }),
      Unocss(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: VITE_APP_TITLE
          }
        }
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  };
};
