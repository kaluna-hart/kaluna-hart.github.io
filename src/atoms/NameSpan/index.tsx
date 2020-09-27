import React from 'react';

const StyledSpan = `
  font-family: 'Dancing Script';
`;

export type TNameSpanProps = {
  name: string;
};

export const NameSpan: React.FC<TNameSpanProps> = (props) => {
  const { name } = props;
  return <span>{name}</span>;
};

export default NameSpan;

// @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
