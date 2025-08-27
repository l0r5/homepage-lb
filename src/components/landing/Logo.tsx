import styled from '@emotion/styled';
import { Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

// MIGRATION NOTE FOR REACT 19:
// This component uses Chakra UI components with complex union types
// When upgrading to React 19, consider using more explicit prop types
// or refactoring to simplify the component structure

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;

  &:hover img {
    transform: scale(1.2);
  }
`;

export const Logo: React.FC = () => {
  // Extract color mode value outside JSX for simpler type inference
  const colorMode = useColorModeValue('', '-dark');
  const initialsLogoImg = `/images/logo${colorMode}.png`;
  
  // Extract text color outside JSX
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    // @ts-expect-error - Known issue with complex union types in Chakra UI components
    <Link href={'/'}>
      <LogoBox>
        <img src={initialsLogoImg} width={25} height={25} alt={'logo'} />
        <Text 
          color={textColor}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}>
        </Text>
      </LogoBox>
    </Link>
  );
};