import React from 'react';

export const Section: React.FCX = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Section;
