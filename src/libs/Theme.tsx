import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeConfig, StyleFunctionProps } from '@chakra-ui/react';

/**
 * Theme configuration for Chakra UI
 *
 * NOTE FOR FUTURE 3.X MIGRATION:
 * - The theme API in Chakra UI 3.x has been redesigned
 * - When upgrading to 3.x, the following changes will be needed:
 *   1. Update imports from theme-tools (some may be moved directly into @chakra-ui/react)
 *   2. Review the new theme extension API and semantic tokens system
 *   3. Update StyleFunctionProps usage which may have a different structure
 *   4. Check for breaking changes in the color mode implementation
 */

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
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
