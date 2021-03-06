import { defaultThemeMap as defaultStitchesThemeMap } from '@stitches/react';
import {themeColors} from './theme_colors'
import {defaultUtils} from './utils'

export const defaultTokens = {
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;"
  },
  fontSizes: {
    tiny: '.75rem',
    xs: '0.875rem',
    base: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2.25rem',
    xl: '3rem',
    1: "14px",
    2: "16px",
    3: "18px",
    4: "21px",
    5: "25px",
    6: "30px",
    7: "36px",
    8: "44px",
    9: "52px",
    10: "66px",
  },
  fontWeights: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    9: "900",
    hairline: "$1",
    thin: "$2",
    light: "$3",
    normal: "$4",
    medium: "$5",
    semibold: "$6",
    bold: "$7",
    extrabold: "$8",
    black: "$9",
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    md: 1.5,
    lg: 1.625,
    xl: 1.75,
    0: 0,
    1: "12px",
    2: "15px",
    3: "18px",
    4: "21px",
    5: "25px",
    6: "30px",
    7: "36px",
    8: "43px",
    9: "52px",
    10: "82px",
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  space: {
    0: "4px",
    1: "8px",
    2: "12px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "40px",
    7: "48px",
    8: "56px",
    9: "64px",
    10: "72px",
    11: "88px",
    12: "100px",
    96: '24rem'
  },
  sizes: {
    xxs: "50px",
    xs: "100px",
    sm: "200px",
    md: "300px",
    lg: "400px",
    xl: "500px",
    0: 0,
    1: "480px",
    2: "768px",
    3: "1024px",
    4: "1400px",
    5: "1600px",
  },
  radii: {
    1: "4px",
    2: "6px",
    3: "8px",
    xs: '7px',
    sm: '9px',
    md: '12px',
    base: '14px',
    lg: '14px',
    xl: '18px',
    squar: '33%',
    round: '50%',
    pill: '9999px'
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999'
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px'
  },
  transitions: {
    default: 'all 250ms ease'
  },
  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1720px'
  }
};

export const defaultColors = {
  ...themeColors,
  gradient:
    'linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)',
  link: '$blue500'
};

export const defaultMedia = {
  bp1:  `(max-width: ${defaultTokens.breakpoints.xs})`,
  bp2:  `(max-width: ${defaultTokens.breakpoints.sm})`,
  bp3:  `(max-width: ${defaultTokens.breakpoints.md})`,
  bp4:  `(max-width: ${defaultTokens.breakpoints.lg})`,
  bp5:  `(max-width: ${defaultTokens.breakpoints.xl})`,
  bp1_min:  `(min-width: ${defaultTokens.breakpoints.xs})`,
  bp2_min:  `(min-width: ${defaultTokens.breakpoints.sm})`,
  bp3_min:  `(min-width: ${defaultTokens.breakpoints.md})`,
  bp4_min:  `(min-width: ${defaultTokens.breakpoints.lg})`,
  bp5_min:  `(min-width: ${defaultTokens.breakpoints.xl})`,
  motion: '(prefers-reduced-motion)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'
};

export const defaultThemeMap = {
  ...defaultStitchesThemeMap,
};

export default {
  prefix: 'kich',
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: {}
  },
  media: defaultMedia,
  utils: defaultUtils,

};
