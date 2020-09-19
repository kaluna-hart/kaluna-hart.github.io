import React from 'react';
import styled from '@emotion/styled';
import FlexContainer from '../../../atoms/FlexContainer';
import Container from '../../../atoms/Container';
import { TProfileSectionProps } from '..';

const FlexGrowItem = styled.div`
  flex-grow: 2;
  margin-left: 20px;
`;

type THistoryItem = {
  date: {
    year: number;
    month: number;
  };
  event: string;
  details: string[];
};

const historyItems: THistoryItem[] = [
  {
    date: {
      year: 2020,
      month: 3,
    },
    event: '新潟大学大学院自然科学研究科電気情報工学専攻 修士課程修了',
    details: ['2018年度 電子情報通信学会 短距離無線通信(SRW)研究会 優秀学生賞受賞'],
  },
  {
    date: {
      year: 2018,
      month: 3,
    },
    event: '新潟大学工学部電気電子工学科卒業',
    details: [''],
  },
];

const HistoryItem: React.FCX<THistoryItem> = (props) => {
  const { date, event, details } = props;
  return (
    <FlexContainer>
      <div>{`${date.year}年${date.month}月`}</div>
      <FlexGrowItem>
        <div>{event}</div>
        <ul>
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </FlexGrowItem>
    </FlexContainer>
  );
};

const Content: React.FC = () => {
  return (
    <Container>
      {historyItems.map((item) => (
        <HistoryItem {...item} key={item.event} />
      ))}
    </Container>
  );
};

export const historyData: TProfileSectionProps = {
  sectionHeader: '経歴',
  sectionContent: <Content />,
};

export default historyData;
