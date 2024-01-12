import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { palettePlugin } from '@vuepress/plugin-palette'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import container from 'markdown-it-container'

const __dirname = getDirname(import.meta.url)

export const emiylTheme = (options) => {
  return {
    name: 'emiyl-theme',
    extends: defaultTheme(options),
    clientConfigFile: path.resolve(__dirname, './client.js'),

    alias: {
      '@theme/AutoLink.vue': path.resolve(__dirname, './components/AutoLink.vue'),
      '@theme/HomeContent.vue': path.resolve(__dirname, './components/HomeContent.vue'),
      '@theme/HomeHero.vue': path.resolve(__dirname, './components/HomeHero.vue'),
      '@theme/NavbarDropdown.vue': path.resolve(__dirname, './components/NavbarDropdown.vue'),
      '@theme/PageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue'),
    },
    
    plugins: [
      palettePlugin({
        preset: 'sass',
        userPaletteFile: path.resolve(__dirname, './styles/palette.scss'),
        userStyleFile: path.resolve(__dirname, './styles/index.scss')
      }),
      registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './tabs') })
    ],

    async onPrepared(app) {
        await app.writeTemp('waldoUnits.json', JSON.stringify(options.hasOwnProperty('adUnits') ? options.adUnits : []))
    },

    extendsMarkdown: (md) => {
        md.use(container, "tabs", {
        render: (tokens, idx) => {
            const token = tokens[idx];
            if (token.nesting === 1) {
            return `<Tabs ${token.info}>\n`;
            } else {
                return `</Tabs>\n`;
                }
            }
        });
    
        md.use(container, 'tab', {
        render: (tokens, idx) => {
            const token = tokens[idx];
            if (token.nesting === 1) {
            return `<Tab ${token.info}>\n`;
            } else {
                return `</Tab>\n`;
                }
            }
        });
    },
  }
}