import React from 'react';
import { ReactSVG } from 'react-svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@emotion/styled';

export type TLogoSvgIconProps = {
  src: string;
  className?: string;
  width: string;
  height: string;
  margin: string;
};

const StyledReactSVG = styled(ReactSVG)((props: TLogoSvgIconProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  padding: 'auto',
}));

export const LogoSvgIcon: React.FC<TLogoSvgIconProps> = (props) => {
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
};

export default LogoSvgIcon;
