import { IDefaultTheme } from '../../models/IDefaultTheme'

export const theme: IDefaultTheme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    h5: 16,
    h4: 18,
    h3: 22,
    h2: 30,
    h1: 42,
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  colors: {
    primary: '#4AC5EE',
    primaryVariant: '#016FCF',
    secondary: '#070D59',
    secondaryVariant: ' #12B0A3',
    background: '#f6f6f6',
    backgroundVariant: '#F8FCFF',
    error: '#A32D29',
    primaryFont: '#00000099',
    secondaryFont: '#FFFFFF',
  },
  // .... and other styles
}
