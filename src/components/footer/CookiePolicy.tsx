import React from 'react';
import { Heading, VStack, Text, Container } from '@chakra-ui/react';

export const CookiePolicy = () => {
  return (
    <Container maxW={'container.lg'}>
      <VStack spacing={6} align="start" mt={10}>
        <Heading as={'h2'} variant={'page-title'}>
          Cookie Policy
        </Heading>
        <VStack align="start" spacing={3}>
          <Text>
            This website does not use cookies. Cookies are small text files that can be used by websites to make a
            user's
            experience more efficient.
          </Text>
          <Text>
            Although the law states that I can store cookies on your device if they are strictly necessary for the
            operation of this site, for all other types of cookies I would need your permission.
          </Text>
          <Text>
            As I do not use any cookies, I do not collect, store, or process any personal data of my users via cookies.
            Therefore, there is no need to ask for your consent for cookies in this case.
          </Text>
          <Text>
            If you have any questions or concerns about my policy or practices, feel free to contact me.
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};