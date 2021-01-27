import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';

export type TFloatingButtonProps = {
  to: string;
};

export const FloatingButton: React.FCX<TFloatingButtonProps & FlexProps> = ({ children, to, ...props }) => {
  return (
    <Flex
      background="rgba(255,255,255,0.3)"
      boxShadow="0 8px 32px 0 rgba(31,38,135,0.37)"
      backdropFilter="blur(6.0px)"
      borderRadius="10px"
      border="1px solid rgba(255,255,255,0.18)"
      justifyContent="center"
      alignItems="center"
      _hover={{ boxShadow: 'none' }}
      {...props}
    >
      <Link href={to}>{children}</Link>
    </Flex>
  );
};

export default FloatingButton;
