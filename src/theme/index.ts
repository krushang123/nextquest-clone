import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

import { styles } from './style';

const customTheme: Dict = extendTheme(
  {
    styles,
    fonts: {
      heading: "'Lexend Deca', sans-serif",
      body: "'Lexend Deca', sans-serif",
    },
  },
  {
    components: {},
  },
  withDefaultColorScheme({
    colorScheme: 'orange',
  })
);

export default customTheme;
