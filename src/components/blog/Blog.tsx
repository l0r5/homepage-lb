import React from 'react';
import { Box, Container, Link } from '@chakra-ui/react';
import { BlogHeader } from './header/BlogHeader';
import { Paragraph } from '../layout/Paragraph';
import { IoArrowForward } from 'react-icons/all';
import { BlogPosts } from './blog-posts/BlogPosts';

export const Blog = () => (
  <>
    <BlogHeader />
    <Container maxW={'container.lg'}>
      <Box
        flex="1"
        order={{ base: 1, md: 0 }}
        pr={{ md: 6 }}
      >
        <Paragraph>Welcome to my blog! As a Full-Stack Developer based in Switzerland, I love connecting and creating
          through tech. Here, you'll find a mix of my developer journey and my personal life, including my travels and
          memorable experiences.

          From cool tech tools and techniques to my adventures abroad, you'll discover a variety of topics covered here.
          So whether you're looking for the latest tech trends or some travel inspiration, this blog has something for
          everyone.

          Take a dive into the posts and resources available and don't hesitate to reach out with any questions or
          comments. Enjoy the read and happy exploring! {' '}
          <Link
            display="inline-flex"
            alignItems="center"
            gap={1}
            textDecoration="none"
            color="orange.500"
            href={'/'}
          >
            Learn more about me <IoArrowForward display="inline" />
          </Link>
        </Paragraph>
        <BlogPosts />
      </Box>
    </Container>
  </>
);

