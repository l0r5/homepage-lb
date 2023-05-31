import React from 'react';
import { Container, Heading, VStack, Text } from '@chakra-ui/react';

export const DataProtection = () => {
  return (
    <Container maxW={'container.lg'}>
      <VStack spacing={6} align="start" mt={10}>
        <Heading as={'h2'} variant={'page-title'}>
          Data Protection
        </Heading>
        <VStack align="start" spacing={3}>
          <Text>
            I, Lars Braitinger, take the protection of your personal data very seriously. I treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
          </Text>
          <Text>
            The use of my website is usually possible without providing personal information. As far as personal data (for example name, address or e-mail addresses) are collected on my pages, this is always done on a voluntary basis as far as possible. These data will not be disclosed to third parties without your explicit consent.
          </Text>
          <Text>
            Please note that data transmission over the Internet (for example, when communicating by e-mail) may have security vulnerabilities. A complete protection of the data from access by third parties is not possible.
          </Text>
          <Text>
            Cookies: My website does not use cookies.
          </Text>
          <Text>
            Server-Log-Files: The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: Browser type and browser version, used operating system, referrer URL, host name of the accessing computer, time of server request. These data cannot be assigned to specific persons. A merge of this data with other data sources will not be done. I reserve the right to check this data retrospectively, if I become aware of specific indications for illegal use.
          </Text>
          {/*<Text>*/}
          {/*  If you have questions about this Privacy Policy, you can contact me at [Your Contact Information].*/}
          {/*</Text>*/}
        </VStack>
      </VStack>
    </Container>
  );
};