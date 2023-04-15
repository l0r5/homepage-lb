import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled'

interface BioSectionProps {
  year: string;
  children: React.ReactNode;
}

export const BioSection: React.FC<BioSectionProps> = ({ year, children }) => {
  return (
    <Flex justifyContent="space-between" alignItems="flex-start" mb={1} width="100%">
      <BioYear>{year}</BioYear>
      <Box flex="1">{children}</Box>
    </Flex>
  );
};

export const BioYear = styled(Box)`
  font-weight: bold;
  margin-right: 1em;
`;
