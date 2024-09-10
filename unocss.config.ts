import presetWeapp, { colors } from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
const { presetWeappAttributify, transformerAttributify } = extractorAttributify()
import { defineConfig } from 'unocss'
 export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
  ],
  rules: [
    [/^fw-(\d*)$/, ([, d]) => ({ width: `${d * 375 * 2/ 320 }rpx` })],
    [/^fh-(\d*)$/, ([, d]) => ({ height: `${d * 375 * 2/ 320 }rpx` })],
    [/^fm(t|b|l|r*)-(\d*)$/, ([, t, d]) => {
      const map = {
        t: 'top',
        b: 'bottom',
        l: 'left',
        r: 'right',
      }
      return ({ [t ? `margin-${map[t]}` : 'margin']: `${d * 375 * 2 / 320 }rpx` })
    }],
    [/^fs-(\d*)$/, ([, d]) => ({ 'font-size': `${d * 375 * 2 / 320 }rpx` })],
    [/^fp(t|b|l|r*)-(\d*)$/, ([, t, d]) => {
      const map = {
        t: 'top',
        b: 'bottom',
        l: 'left',
        r: 'right',
      }
      return ({ [t ? `padding-${map[t]}` : 'padding']: `${d * 375 * 2 / 320 }rpx` })
    }],
  ],
  shortcuts: [
    {
      'line-divide': 'border-bottom border-solid',
      'border-base': 'border border-gray-500_10',
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
      'flex-between-center': 'flex justify-between items-center',
      'text-info': 'text-20rpx lh-28rpx',
      'text-caption': 'text-24rpx lh-32rpx',
      'text-content': 'text-28rpx lh-36rpx',
      'text-subtitle': 'text-32rpx lh-44rpx',
      'text-title': 'text-36rpx lh-56rpx',
      'text-heading': 'text-40rpx lh-60rpx',
      'text-one-line': 'text-ellipsis whitespace-nowrap',
    },
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
  theme: {
    colors: { 
      themeColor: 'var(--theme-color)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      font: 'var(--font-color)',
      info: '#999999',
      dark: '#1D1E1F'
    }
  }
})