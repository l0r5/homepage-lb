import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  delay?: number;
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

export const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={`all 0.8s ease-in-out${delay}`}
    mb={6}>
    {children}
  </StyledDiv>
);