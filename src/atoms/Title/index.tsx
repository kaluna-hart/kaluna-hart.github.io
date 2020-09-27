import React from 'react';
import { TDate } from '../../types/mdx';
import CategoryBox from '../../molecules/CategoryBox';

const FlexContainer = `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const WrapFlexContainer = `
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
    <div {...others}>
      <div>
        {lastUpdated ? (
          <span>{`${lastUpdated.year}年${lastUpdated.month}月${lastUpdated.day}日 最終更新`}</span>
        ) : (
          <span />
        )}
        <span>{`${firstPosted.year}年${firstPosted.month}月${firstPosted.day}日 初版投稿`}</span>
      </div>
      <span>{title}</span>
      {categories.map((categoryName) => (
        <CategoryBox categoryName={categoryName} key={categoryName} />
      ))}
    </div>
  );
};

export default Title;
