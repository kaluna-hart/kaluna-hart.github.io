import React from 'react';

export const Section: React.FCX = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

export default Section;
