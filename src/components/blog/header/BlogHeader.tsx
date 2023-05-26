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
      <Box textAlign="center" px={8}>
        <Box textAlign="center" px={8}>
          <VStack spacing={2}>
            <Text textTransform="uppercase" fontSize="medium">
              Welcome to
            </Text>
            <Text fontSize="4xl" fontWeight="medium">
              A journey through{' '}
              <Text as="span" color="orange.500">
                code and creativity
              </Text>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};