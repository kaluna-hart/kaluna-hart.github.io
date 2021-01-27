import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import NextjsSvg from '@svg/nextjs.svg';
import RustSvg from '@svg/rust.svg';
import TypescriptSvg from '@svg/typescript.svg';
import ReactSvg from '@svg/react.svg';
import PythonSvg from '@svg/python.svg';
import SkillBox, { SkillBoxProps } from '../../SkillBox';
import { ProfileSectionProps } from '..';

const boxList: SkillBoxProps[] = [
  { name: 'rust', Icon: RustSvg },
  { name: 'react', Icon: ReactSvg },
  { name: 'typescript', Icon: TypescriptSvg },
  { name: 'Next.js', Icon: NextjsSvg },
  { name: 'python', Icon: PythonSvg },
];

type ContentProps = {
  list: SkillBoxProps[];
};

const Content: React.FCX<ContentProps & FlexProps> = ({ list, ...props }) => {
  return (
    <Flex pt={['2rem']} pb="1rem" px={['0.5rem']} justifyContent={['space-around']} {...props}>
      {list.map((box) => (
        <SkillBox {...box} w={['4rem', '6rem', '8rem']} h={['5rem', '6rem', '8rem']} key={box.name} />
      ))}
    </Flex>
  );
};

export const skillData: ProfileSectionProps = {
  sectionHeader: 'スキル',
  sectionContent: <Content list={boxList} />,
};

export default skillData;
