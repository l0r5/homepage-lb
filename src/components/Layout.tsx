import React, { ReactElement, ReactNode } from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Theme } from '../libs/Theme';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <ChakraProvider theme={Theme}>
      <Box as={'main'} pb={8}>
        <Navbar path='/' />
        <Container maxW={'container.md'} pt={14}>
          {children}
        </Container>
      </Box>
    </ChakraProvider>
  );
};