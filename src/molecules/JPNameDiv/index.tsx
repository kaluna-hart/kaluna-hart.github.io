import React from 'react';
import NameDiv from '../../atoms/NameDiv';

export type IJPNameDivProps = {
  height: string;
  fontSize: string;
};

export default function JPNameDiv(props: IJPNameDivProps) {
  const { height, fontSize } = props;
  return <NameDiv name="Hayato Kumazawa" fontSize={fontSize} height={height} />;
}
