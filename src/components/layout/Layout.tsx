import React, { ReactElement, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Footer } from '../footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
      <Box as={'main'} pb={8}>
        <Navbar path="/" />
        <AnimatePresence
          mode={'wait'}
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Container maxW={'container.md'} pt={14}>
            {children}
          </Container>
        </AnimatePresence>
        <Footer />
      </Box>
  );
};