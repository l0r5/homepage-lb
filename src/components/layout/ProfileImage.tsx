import { chakra, ChakraProps, Image } from "@chakra-ui/react";

interface ProfileImageProps extends ChakraProps {
  src: string;
  alt: string;
}

const ProfileImage = chakra(({ src, alt, ...rest }: ProfileImageProps) => (
  <Image src={src} alt={alt} {...rest} />
));

export default ProfileImage;