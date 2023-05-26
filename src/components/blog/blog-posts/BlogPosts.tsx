import { Box, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchPosts, Post } from '../fetchPosts';



export const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    }

    loadPosts();
  }, []);

  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        {posts.map((post) => (
          <GridItem key={post.id} textAlign="center" mb={4}>
            <Link href={`/blog/${post.slug}`}>
              <Image
                className="border border-slate-300 dark:border-zinc-700 rounded-xl"
                src={post.heroImage}
                width={720 * 2}
                boxSize={{ base: "100%", md: "720px" }}
                alt="Thumbnail"
              />
              <Box mt={3}>
                <Heading as="h2" size="xl" fontWeight="bold">
                  {post.metadata.title}
                </Heading>
                {post.metadata.description && (
                  <Text opacity="0.7">{post.metadata.description}</Text>
                )}
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};