declare module '*.mdx' {
  const MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  export type Author = {
    firstName: string;
    lastName: string;
  };

  export type ArticleDate = {
    year: number;
    month: number;
    day: number;
  };

  export type Metadata = {
    title: string;
    categories: string[];
    releaseDate: ArticleDate;
    updateDate?: ArticleDate;
    authors: Author[];
    articleIconName: string;
  };

  export const metadata: Metadata;
}
