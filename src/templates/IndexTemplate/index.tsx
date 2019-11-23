import React from 'react';
import LogoSvgIcon from '../../atoms/LogoSvgIcon';
import IconGridList from '../../organisms/IconGridList';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import NameList from '../../organisms/NameList';
import styled from '@emotion/styled';

const StyledDiv = styled.div({
  width: '90%',
  height: '100%',
  margin: 'auto',
  textAlign: 'center'
});

const overrideHeaderStyle = {
  width: '100%',
  height: '30%',
  margin: 'auto'
};

const overrideSvgIconStyle = {
  width: 'auto',
  height: '20%',
  margin: 'auto'
};

const overrideNameListStyle = {
  width: '100%',
  height: '10%',
  fontSize: '1.5rem',
  margin: 'auto'
};

const overrideIconGridList = {
  width: '100%',
  height: '30%',
  margin: 'auto'
};

const overrideFooterStyle = {
  width: '100%',
  height: '10%',
  margin: 'auto'
};

export type IIndexTemplateProps = {
  src: string;
  className?: string;
};

export default function IndexTemplate(props: IIndexTemplateProps) {
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
}
