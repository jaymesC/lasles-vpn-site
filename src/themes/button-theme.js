import { colors } from './colors';

export const ButtonThemeLight = {
  variants: {
    primary: {
      backgroundColor: colors.primary,
      border: '2px solid transparent',
      color: colors.white,
    },
    secondary: {
      backgroundColor: colors.white,
      border: '2px solid #F53855',
      color: colors.primary,
    },
    success: {
      backgroundColor: colors.green,
      border: '2px solid #28A745',
      color: colors.white,
    },
    danger: {
      backgroundColor: colors.red,
      border: '2px solid #DC3545',
      color: colors.white,
    },
    info: {
      backgroundColor: colors.blue,
      border: '2px solid #118f9a',
      color: colors.white,
    },
    warning: {
      backgroundColor: colors.orange,
      border: '2px solid #FFC107',
      color: colors.white,
    },
    plain: {
      backgroundColor: colors.white,
      border: '2px solid #FFFFFF',
      color:colors.black,
    }
  },
};

export const ButtonTheme = ButtonThemeLight;
