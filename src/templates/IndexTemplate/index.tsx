import React from 'react';
import styled from '@emotion/styled';
import LogoSvgIcon from '../../atoms/LogoSvgIcon';
import IconGridList from '../../organisms/IconGridList';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import NameList from '../../organisms/NameList';

const StyledDiv = styled.div({
  width: '90%',
  height: '100%',
  margin: 'auto',
  textAlign: 'center',
});

const overrideHeaderStyle = {
  width: '100%',
  height: '30%',
  margin: 'auto',
};

const overrideSvgIconStyle = {
  width: 'auto',
  height: '10%',
  margin: 'auto',
};

const overrideNameListStyle = {
  width: '100%',
  height: '10%',
  fontSize: '1.5rem',
  margin: 'auto',
};

const overrideIconGridList = {
  width: '100%',
  height: '30%',
  margin: 'auto',
};

const overrideFooterStyle = {
  width: '100%',
  height: '10%',
  margin: 'auto',
};

export type TIndexTemplateProps = {
  src: string;
  className?: string;
};

export const IndexTemplate: React.FC<TIndexTemplateProps> = (props) => {
  const { src, className } = props;
  return (
    <StyledDiv className={className}>
      <Header {...overrideHeaderStyle} />
      <LogoSvgIcon src={src} {...overrideSvgIconStyle} />
      <NameList {...overrideNameListStyle} />
      <IconGridList {...overrideIconGridList} />
      <Footer {...overrideFooterStyle} />
    </StyledDiv>
  );
};

export default IndexTemplate;
