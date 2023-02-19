import { Box, Container, Heading } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

export const LandingPage = (): ReactElement => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'} p={3} mb={6} alignContent={'center'}>
        Hello, I'm a full-stack developer based in Switzerland!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Lars Braitinger
          </Heading>
          <p>Software Engineer</p>
        </Box>
      </Box>
    </Container>
  );
};