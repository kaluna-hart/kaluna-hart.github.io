/** @jsx jsx */
import React from 'react';
import { jsx, Flex } from 'theme-ui';
import NextjsSvg from '@svg/nextjs.svg';
import RustSvg from '@svg/rust.svg';
import TypescriptSvg from '@svg/typescript.svg';
import ReactSvg from '@svg/react.svg';
import PythonSvg from '@svg/python.svg';
import SkillBox, { TSkillBoxProps } from '../../SkillBox';
import { TProfileSectionProps } from '..';

const boxList: TSkillBoxProps[] = [
  { name: 'rust', Icon: RustSvg },
  { name: 'react', Icon: ReactSvg },
  { name: 'typescript', Icon: TypescriptSvg },
  { name: 'Next.js', Icon: NextjsSvg },
  { name: 'python', Icon: PythonSvg },
];

type TContentProps = {
  list: TSkillBoxProps[];
};

const Content: React.FCX<TContentProps> = (props) => {
  const { list } = props;
  return (
    <Flex sx={{ overflowX: 'scroll', pt: ['1.0em', '1.3em'], pb: ['0.5em'], px: ['0.2em', null, null, '0.5em'] }}>
      {list.map((box) => (
        <SkillBox {...box} key={box.name} />
      ))}
    </Flex>
  );
};

export const skillData: TProfileSectionProps = {
  sectionHeader: 'スキル',
  sectionContent: <Content list={boxList} />,
};

export default skillData;
