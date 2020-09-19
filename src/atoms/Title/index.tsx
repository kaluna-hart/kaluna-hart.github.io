import React from 'react';
import styled from '@emotion/styled';
import { Container, Text } from 'sancho';
import { TDate } from '../../types/mdx';
import CategoryBox from '../../molecules/CategoryBox';

const FlexContainer = styled(Container)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const WrapFlexContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export type TTitleProps = {
  title: string;
  categories: string[];
  lastUpdated?: TDate;
  firstPosted: TDate;
};

export const Title: React.FCX<TTitleProps> = (props) => {
  const { title, categories, lastUpdated, firstPosted, ...others } = props;
  return (
    <Container {...others}>
      <FlexContainer>
        {lastUpdated ? (
          <Text variant="hidden">{`${lastUpdated.year}年${lastUpdated.month}月${lastUpdated.day}日 最終更新`}</Text>
        ) : (
          <span />
        )}
        <Text variant="hidden">{`${firstPosted.year}年${firstPosted.month}月${firstPosted.day}日 初版投稿`}</Text>
      </FlexContainer>
      <Text variant="h1">{title}</Text>
      <WrapFlexContainer>
        {categories.map((categoryName) => (
          <CategoryBox categoryName={categoryName} key={categoryName} />
        ))}
      </WrapFlexContainer>
    </Container>
  );
};

export default Title;
