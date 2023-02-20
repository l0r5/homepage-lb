import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';
import ProfileImage from '../components/ProfileImage';

export const LandingPage = (): ReactElement => {
  return (
    <Container>
      <Box borderRadius={'lg'} p={3} mb={6} alignContent={'center'}
           bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
           css={{ backdropFilter: 'blur(10px)' }}>
        Hello, I'm a full-stack developer based in Switzerland!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Lars Braitinger
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/lars.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};