import React, { ReactElement, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Footer } from '../footer/Footer';
import SurfKitty from '../surfkitty/SurfKitty';


interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;


}

export const Layout = ({ children, fullWidth = false }: LayoutProps): ReactElement => {
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
        {fullWidth ? (
          <Container maxW={'100%'} padding={0} pt={14}>
            {children}
          </Container>
        ) : (
          <Container maxW={'container.lg'} pt={14}>
            {children}
          </Container>
        )}
      </AnimatePresence>
      <Footer path="/"/>
    </Box>
  );
};