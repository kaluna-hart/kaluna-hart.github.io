import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import NameDiv from '../../atoms/NameDiv';

const nameList = ['faluna', 'kaluna', 'Hart'];

export type TNameListProps = {
  width: string;
  height: string;
  margin: string;
  className?: string;
};

const StyledGrid = styled(Grid)((props: TNameListProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  fontSize: '1.5rem',
}));

const overrideNameDivStyle = {
  fontSize: '90%',
  width: 'auto',
  height: 'auto',
  margin: '0',
  fontFamily: 'Dancing Script',
};

export const NameList: React.FC<TNameListProps> = (props) => {
  return (
    <StyledGrid container justify="center" spacing={4} {...props}>
      {nameList.map((value, index) => (
        <Grid key={index} item>
          <NameDiv name={value} {...overrideNameDivStyle} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default NameList;
