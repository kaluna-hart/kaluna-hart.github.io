/** @jsx jsx */
import React from 'react';
import { jsx, Box, Flex, Container } from 'theme-ui';
import { TProfileSectionProps } from '..';

type THistoryItem = {
  date: {
    year: number;
    month: number;
  };
  event: string;
  details?: string[];
};

const historyItems: THistoryItem[] = [
  {
    date: {
      year: 2020,
      month: 3,
    },
    event: '新潟大学大学院 自然科学研究科 電気情報工学専攻 修士課程修了',
    details: ['2018年度 電子情報通信学会 短距離無線通信(SRW)研究会 優秀学生賞受賞'],
  },
  {
    date: {
      year: 2018,
      month: 3,
    },
    event: '新潟大学 工学部 電気電子工学科 卒業',
  },
  {
    date: {
      year: 2016,
      month: 3,
    },
    event: '群馬工業高等専門学校 電子メディア工学科 卒業',
  },
];

const HistoryItem: React.FCX<THistoryItem> = (props) => {
  const { date, event, details } = props;
  return (
    <Flex sx={{ overflowX: 'scroll' }}>
      <div sx={{ whiteSpace: 'nowrap' }}>{`${date.year}年${date.month}月`}</div>
      <Box sx={{ flexGrow: 2, ml: '20px', whiteSpace: 'nowrap' }}>
        <div>{event}</div>
        <ul>{details && details.map((item) => <li key={item}>{item}</li>)}</ul>
      </Box>
    </Flex>
  );
};

const Content: React.FC = () => {
  return (
    <Container sx={{ p: '1em' }}>
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
