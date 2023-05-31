import React from 'react';
import { Box, Text, Heading, VStack, Container } from '@chakra-ui/react';
import { Paragraph } from '../layout/Paragraph';

export const Imprint = (): JSX.Element => {
  return (
    <Container maxW={'container.lg'}>
      <VStack spacing={6} align="start" mt={10}>
        <Heading as={'h2'} variant={'page-title'}>
          Imprint
        </Heading>
        <VStack align="start" spacing={0}>
          <Heading as={'h4'} size="md">Website Ownership:</Heading>
          <Text>Lars Braitinger</Text>
          {/*<Text>[Your Street Address]</Text>*/}
          {/*<Text>[Your City, Postal Code]</Text>*/}
          <Text>Switzerland</Text>
        </VStack>
        {/*<VStack align="start" spacing={3}>*/}
        {/*  <Heading as={'h4'} size="md">Contact:</Heading>*/}
        {/*  <Text>Email: [Your Email Address]</Text>*/}
        {/*  <Text>Phone: [Your Phone Number]</Text>*/}
        {/*</VStack>*/}
      </VStack>
    </Container>
  );
};