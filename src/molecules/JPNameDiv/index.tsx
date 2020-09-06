import React from 'react';
import NameDiv from '../../atoms/NameDiv';

export type ITJPNameDivProps = {
  height: string;
  fontSize: string;
};

export const TJPNameDiv: React.FC<ITJPNameDivProps> = (props) => {
  const { height, fontSize } = props;
  return (
    <div>
      <NameDiv name="Hayato Kumazawa" fontSize={fontSize} height={height} />
    </div>
  );
};

export default TJPNameDiv;
