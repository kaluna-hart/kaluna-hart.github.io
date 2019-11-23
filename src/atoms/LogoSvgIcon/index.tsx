import React from 'react';
import ReactSVG from 'react-svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@emotion/styled';

const StyledReactSVG = styled(ReactSVG)((props: ILogoSvgIconProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  padding: 'auto'
}));

export type ILogoSvgIconProps = {
  src: string;
  className?: string;
  width: string;
  height: string;
  margin: string;
};

export default function LogoSvgIcon(props: ILogoSvgIconProps) {
  const { src, className, ...other } = props;
  return (
    <StyledReactSVG
      src={src}
      fallback={() => <div>Error!</div>}
      loading={() => (
        <div>
          <CircularProgress />
        </div>
      )}
      className={className}
      {...other}
    />
  );
}
