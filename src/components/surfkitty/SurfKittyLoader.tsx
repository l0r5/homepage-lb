import { forwardRef, Ref } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const KittySpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

type KittyContainerProps = {
  children: React.ReactNode
}

export const KittyContainer = forwardRef((
  { children }: KittyContainerProps,
  ref: Ref<HTMLDivElement>
) => (
  <Box
    ref={ref}
    className="surf-kitty"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <KittyContainer>
      <KittySpinner />
    </KittyContainer>
  );
};

export default Loader;