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
          opacity={0.25}
          width="100%"
          height="100%"
        />
      </Box>
      <Box textAlign="center" px={8} >

        <Text fontSize="4xl" fontWeight="medium">
          <Text textTransform="uppercase" fontSize="medium" mb={2}>
            Welcome to
          </Text>
          A journey through{' '}
          <Text as="span" color="orange.500">
            code and creativity
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};