import React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { Section } from '../layout/Section';

export const Works = () => (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
            My Work
        </Section>
      </SimpleGrid>
    </Container>
)

