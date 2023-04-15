import React from 'react';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { Section } from '../layout/Section';
import { BlogHeader } from './header/BlogHeader';

export const Blog = () => (
  <>
    <BlogHeader />
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h3" fontSize={20} mb={4}>
          Blog
        </Heading>
      </Box>
    </Box>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        Coming soon
      </Section>
    </SimpleGrid>
  </>
);

