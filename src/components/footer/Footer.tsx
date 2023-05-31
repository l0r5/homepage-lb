import { Box, Container, Link, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  path: string;
  children: ReactNode;
}

const FooterLink = ({ href, path, children }: LinkProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link href={href}
          p={2}
          bg={active ? 'glassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}>
      {children}
    </Link>
  );
};

interface FooterProps {
  path: string;
}

export const Footer = ({ path }: FooterProps) => {
  return (
    <Box
      as={'footer'}
      w={'100%'}
      fontSize="sm"
      opacity={0.6}
    >
      <Container display={'flex'} p={2} maxW={'container.lg'} flexWrap={'wrap'} alignItems={'center'}
                 justifyContent={'space-between'}>
        <Box
          textAlign={{ base: 'center', lg: 'left' }}
          mb={{ base: 1, md: 0 }}
          flexGrow={1}
        >
          <FooterLink href={'/imprint'} path={path}>Imprint</FooterLink>
          | <FooterLink href={'/cookies'} path={path}>Cookies</FooterLink>
          | <FooterLink href={'/legal-information'} path={path}>Legal information</FooterLink>
          | <FooterLink href={'/data-protection'} path={path}>Data protection</FooterLink>
        </Box>
        <Box
          textAlign={{ base: 'center', lg: 'right' }}
          width={{ base: 'full', lg: 'auto' }}
        >
          &copy; {new Date().getFullYear()} Lars Braitinger. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
};
