import React from 'react';
import GitHubIconButton from '../../molecules/GitHubIconButton';
import TwitterIconButton from '../../molecules/TwitterIconButton';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';

const StyledGridContainer = styled(Grid)((props: IIconGridListProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  padding: 'auto'
}));

const StyledGridItem = styled(Grid)({
  padding: '0',
  height: '100%'
});

type IIconList = typeof GitHubIconButton[];

export type IIconGridListProps = {
  width: string;
  height: string;
  margin: string;
  className?: string;
};

const iconList: IIconList = [GitHubIconButton, TwitterIconButton];

export default function IconGridList(props: IIconGridListProps) {
  return (
    <StyledGridContainer container justify="center" spacing={4} {...props}>
      {iconList.map((Value, index) => (
        <StyledGridItem key={index} item>
          <Value />
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
}
