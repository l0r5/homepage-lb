import React, { ReactElement, ReactNode } from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <ChakraProvider>
      <Box as={'main'} pb={8}>
        <Navbar path='/' />
        <Container maxW={'container.md'} pt={14}>
          {children}
        </Container>
      </Box>
    </ChakraProvider>
  );
};