import { ColorModeScript } from '@chakra-ui/react';
import { Theme } from '../../libs/Theme';

export const ThemeInitializer = () => {
  return (
    <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
  );
};
