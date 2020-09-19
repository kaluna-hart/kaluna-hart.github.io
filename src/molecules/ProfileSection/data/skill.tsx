import React from 'react';
import NextjsSvg from '@svg/nextjs.svg';
import RustSvg from '@svg/rust.svg';
import TypescriptSvg from '@svg/typescript.svg';
import ReactSvg from '@svg/react.svg';
import PythonSvg from '@svg/python.svg';
import styled from '@emotion/styled';
import FlexContainer from '../../../atoms/FlexContainer';
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

const ScrollFlexContainer = styled(FlexContainer)`
  overflow-x: scroll;
  max-width: 50%;
`;

const StyledSkillBox = styled(SkillBox)`
  max-width: 33%;
  margin: 5px;
  box-sizing: border-box;
`;

const Content: React.FCX<TContentProps> = (props) => {
  const { list } = props;
  return (
    <ScrollFlexContainer>
      {list.map((box) => (
        <StyledSkillBox {...box} key={box.name} />
      ))}
    </ScrollFlexContainer>
  );
};

export const skillData: TProfileSectionProps = {
  sectionHeader: 'スキル',
  sectionContent: <Content list={boxList} />,
};

export default skillData;
