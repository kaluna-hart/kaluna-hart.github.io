import React from 'react';
import { Text, Box, Flex, FlexProps } from '@chakra-ui/react';

export type SkillBoxProps = {
  name: string;
  Icon: React.FCX;
};

export const SkillBox: React.FCX<SkillBoxProps & FlexProps> = ({ name, Icon, ...props }) => {
  return (
    <Flex
      flexDirection={['column']}
      justifyContent={['space-between']}
      boxShadow="0 2px 2px 0 rgba(0,0,0,0.12) 0 2px 2px 0 rgba(0,0,0,0.24)"
      bg="#f0fff0"
      mx={['0.2rem']}
      borderRadius={['0.5rem']}
      overflowX="scroll"
      zIndex={3}
      p={['0.1rem']}
      {...props}
    >
      <Box w={['3em', '4rem', '6rem']} textAlign="center" m={['auto']}>
        <Icon />
      </Box>
      <Box textAlign="center">
        <Text color={['gray.600']} fontWeight={['bold']} fontSize={['0.5rem', '0.75rem', '1rem']}>
          {name}
        </Text>
      </Box>
    </Flex>
  );
};

export default SkillBox;
