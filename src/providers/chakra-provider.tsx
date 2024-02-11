'use client';

import { type ReactNode } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';

import theme from '../theme';

interface ChakraUIProviderProps {
  children: ReactNode;
}

export const ChakraUIProvider = (props: ChakraUIProviderProps) => {
  const { children } = props;

  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        colorModeManager={cookieStorageManager}
        toastOptions={{
          defaultOptions: {
            duration: 3000,
            isClosable: true,
            position: 'bottom',
          },
        }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
