import React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { Section } from '../layout/Section';

export const Work = () => (
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Work
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        Coming soon
      </Section>
    </SimpleGrid>
  </Container>
);

