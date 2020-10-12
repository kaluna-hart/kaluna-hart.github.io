/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Box, Link as TLink } from 'theme-ui';
import Link from 'next/link';
import { range } from '../../libs/article-loader';

export type PagerProps = {
  page: number;
  total: number;
  perPage: number;
  href: string;
  asCallback: (page: number) => string;
};

export const Pager: React.FCX<PagerProps> = ({ page, total, perPage, href, asCallback, ...props }) => {
  const pages = range(Math.ceil(total / perPage));

  return (
    <Flex
      sx={{
        position: 'relative',
        background: '#F0FFF0',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
      }}
      {...props}
    >
      <Box sx={{ position: 'absolute', left: ['0.1em'], top: ['25%'] }}>{'<'}</Box>
      <Flex
        sx={{
          alignItems: 'baseline',
          overflowX: 'scroll',
          position: 'relative',
          mx: '0.8em',
          '& *:first-of-type': {
            ml: '0px',
          },
        }}
      >
        {pages.map((pageNumber) =>
          pageNumber === page ? (
            <Box sx={{ width: ['2em'], minWidth: ['2em'], fontSize: ['1.5em'], textAlign: 'center' }}>{pageNumber}</Box>
          ) : (
            <Box
              sx={{
                width: ['2em'],
                height: ['2em'],
                minWidth: ['2em'],
                minHeight: ['2em'],
                mx: ['3.0em', null, '4.0em'],
                borderRadius: '50%',
                bg: '#6E6E6E',
                textAlign: 'center',
                fontSize: '1.0em',
                lineHeight: ['2em'],
              }}
            >
              <Link href={href} as={asCallback(pageNumber)} passHref>
                <TLink sx={{ textDecoration: 'none', color: '#F0FFF0' }}>{pageNumber}</TLink>
              </Link>
            </Box>
          )
        )}
      </Flex>
      <Box sx={{ position: 'absolute', right: ['0.1em'], top: ['25%'] }}>{'>'}</Box>
    </Flex>
  );
};

export default Pager;
