import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeConfig, StyleFunctionProps } from '@chakra-ui/react';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#ff63c4')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

const colors = {
  glassTeal: '#88ccca'
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

export const Theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});
