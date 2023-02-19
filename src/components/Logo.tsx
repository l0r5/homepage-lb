import styled from '@emotion/styled';
import { Link, Text, useColorModeValue } from '@chakra-ui/react';

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
export const Logo = () => {
  const initialsLogoImg = `/images/logo${useColorModeValue('', '-dark')}.svg`;

  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <img src={initialsLogoImg} width={30} height={30} alt={'logo'} color={'#ffd400'} />
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily="M PLUS Rounded 1c"
                fontWeight="bold"
                ml={3}>
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};