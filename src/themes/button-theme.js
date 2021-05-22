import { colors } from './colors';

export const ButtonThemeLight = {
  variants: {
    primary: {
      backgroundColor: colors.primary,
      border: '2px solid transparent',
      color: colors.white,
    },
    tertiary: {
      backgroundColor: colors.white,
      border: '2px solid #F53855',
      color: colors.primary,
    },
  },
};

export const ButtonTheme = ButtonThemeLight;
