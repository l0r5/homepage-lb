import { ReactNode } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton, MenuItem, MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Logo } from '../landing/Logo';
import { ThemeToggleButton } from '../theme/ThemeToggleButton';

interface LinkProps {
  href: string;
  path: string;
  children: ReactNode;
}

const LinkItem = ({ href, path, children }: LinkProps) => {
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

interface NavbarProps {
  path: string;
}

export const Navbar = ({ path }: NavbarProps) => {
  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container display={'flex'} p={2} maxW={'container.lg'} flexWrap={'wrap'} alignItems={'center'}
                 justifyContent={'space-between'}>
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href={'/work'} path={path}>
            Work
          </LinkItem>
          <LinkItem href={'/blog'} path={path}>
            Blog
          </LinkItem>
        </Stack>
        <Box flex={1} textAlign={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant={'outline'} aria-label={'Options'} />
              <MenuList>
                <MenuItem as={Link} href={'/'}>About</MenuItem>
                <MenuItem as={Link} href={'/work'}>Work</MenuItem>
                <MenuItem as={Link} href={'/blog'}>Blog</MenuItem>
                <MenuItem as={Link} href={'https://github.com/l0r5/homepage-lb'}>View Source</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};