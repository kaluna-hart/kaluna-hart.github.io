// import path from 'path';
// import fs from 'fs';
import { Metadata, ArticleDate } from '../organisms/ArticleLayout';

export type MetadataSet = {
  pid: string;
  metadata: Metadata;
};

// const DIR = path.join(process.cwd(), 'articles');
// const EXTENSION = '.mdx';

// export const getMdxFiles = (): string[] => {
//   const filenames = fs.readdirSync(DIR);
//   return filenames.filter((filename) => path.parse(filename).ext === EXTENSION);
// };

export const getMetadata = (): MetadataSet[] => {
  const reqContexts = require.context('../../articles/', false, /\.mdx$/);
  return reqContexts.keys().map(
    (fileName): MetadataSet => ({
      pid: fileName.replace('.mdx', ''),
      metadata: reqContexts(fileName).metadata,
    })
  );
};

export const sortMetadata = (metadataList: MetadataSet[]): MetadataSet[] => {
  const sorted = metadataList.sort((pre, next) => {
    const preDate = formatDate(pre.metadata.updateDate ? pre.metadata.updateDate : pre.metadata.releaseDate);
    const nextDate = formatDate(next.metadata.updateDate ? next.metadata.updateDate : next.metadata.releaseDate);
    return nextDate - preDate;
  });
  return sorted;
};

export const formatDate = (date: ArticleDate): number => date.day + date.month * 100 + date.year * 100 * 100;

export const range = (end: number): Array<number> => Array.from({ length: end }, (_, i) => i + 1);
