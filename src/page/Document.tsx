import { ColorModeScript } from '@chakra-ui/react';
import { Theme } from '../libs/Theme';

export default class Document {
  render() {
    return (
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
    );
  }
}
