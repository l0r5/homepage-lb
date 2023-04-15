import { Box, Flex, useBreakpointValue, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

export const BlogHeader: React.FC = () => {

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      mb={6}
      h={80}
      w="full"
    >
      <Box position="absolute" w="full" h="full" overflow="hidden">
        <Image
          src={'/images/blog_header.png'}
          alt="Blog header image"
          objectFit="cover"
          opacity={0.5}
          width="100%"
          height="100%"
        />
      </Box>
      <VStack zIndex={10} textAlign="center" px={8} spacing={4} boxShadow="2xl">
        <Text textTransform="uppercase" fontSize="sm" mb={4}>
          Welcome to
        </Text>
        <Text fontSize="4xl" fontWeight="medium">
          my{' '}
          <Text as="span" color="orange.500">
            Blog
          </Text>
        </Text>
      </VStack>
    </Flex>
  );
};