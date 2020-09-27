import React from 'react';

export const Section: React.FCX = (props) => {
  const { className, children } = props;
  return <div>{children}</div>;
};

export default Section;
