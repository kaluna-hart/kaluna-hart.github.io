/** @jsx jsx */
import React from 'react';
import { jsx, Box, Heading, Card, Flex } from 'theme-ui';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArticleDate } from '../../organisms/ArticleLayout';

export type ArticleCardProps = {
  IconName: string;
  title: string;
  releaseDate: ArticleDate;
  updateDate?: ArticleDate;
  pid: string;
};

export const ArticleCard: React.FCX<ArticleCardProps> = ({
  IconName,
  title,
  releaseDate,
  updateDate,
  pid,
  ...props
}) => {
  const Icon = dynamic(() => import(`../../../public/svg/${IconName}`));
  return (
    <Link href="/posts/[pid]" as={`/posts/${pid}`}>
      <Card variant="article" {...props}>
        <Icon sx={{ width: ['20%'], height: ['20%'] }} />
        <Box sx={{ px: '0.5em', position: 'relative', width: '80%' }}>
          <Heading sx={{ fontFamily: 'body', fontSize: ['0.8em', '1.2em'] }}>{title}</Heading>
          <Flex
            sx={{
              bottom: '0.2em',
              width: '80%',
              position: 'absolute',
              justifyContent: 'space-between',
              fontSize: ['0.8em', '1em'],
            }}
          >
            <Box
              sx={{ whiteSpace: 'nowrap', fontSize: '1em' }}
            >{`公開日: ${releaseDate.year}/${releaseDate.month}/${releaseDate.day}`}</Box>
            {updateDate && (
              <Box
                sx={{ whiteSpace: 'nowrap', fontSize: '1em' }}
              >{`更新日: ${updateDate.year}/${updateDate.month}/${updateDate.day}`}</Box>
            )}
          </Flex>
        </Box>
      </Card>
    </Link>
  );
};

export default ArticleCard;
