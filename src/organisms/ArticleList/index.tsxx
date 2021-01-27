/** @jsx jsx */
import React from 'react';
import { jsx, Flex } from 'theme-ui';
import ArticleCard from '../../molecules/ArticleCard';
import { MetadataSet } from '../../libs/article-loader';

export type ArticleListProps = {
  posts: MetadataSet[];
};

export const ArticleList: React.FCX<ArticleListProps> = ({ posts, ...props }) => {
  return (
    <Flex variant="styles.blog.articleList" {...props}>
      {posts.map(({ pid, metadata }) => (
        <ArticleCard
          title={metadata.title}
          releaseDate={metadata.releaseDate}
          updateDate={metadata.updateDate}
          IconName={metadata.articleIconName}
          pid={pid}
          key={pid}
          sx={{ p: ['0.2em'] }}
        />
      ))}
    </Flex>
  );
};

export default ArticleList;
