
import { Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Lars Braitinger. All Rights Reserved.
    </Box>
  )
}