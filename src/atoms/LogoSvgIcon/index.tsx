/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import LogoSvg from '@svg/logo.svg';

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
    <LogSvg />
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
