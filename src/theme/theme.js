import { colors } from './colors';
import changeColors from '../utils/themeColors';

const jsonColors = changeColors(colors);
console.log(jsonColors.green0);
export const theme = {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
  ],
  fonts: {
    body: 'sans-serif',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96,
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: 'var(--color-blue-700)',
    secondary: 'var(--color-neutral-800)',
    link: 'var(--color-blue-700)',
    body: 'var(--color-neutral-800)',
    headline: 'var(--color-neutral-900)',
    subtext: 'var(--color-neutral-700)',
    border: 'var(--color-neutral-200)',
    error: 'var(--color-red-800)',
    warning: 'var(--color-yellow-600)',
    ...jsonColors,

  },
};
