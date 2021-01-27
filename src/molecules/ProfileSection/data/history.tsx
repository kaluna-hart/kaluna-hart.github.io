import React from 'react';
import { Box, Flex, FlexProps, UnorderedList, ListItem } from '@chakra-ui/react';
import { ProfileSectionProps } from '..';

type HistoryItem = {
  date: {
    year: number;
    month: number;
  };
  event: string;
  details?: string[];
};

const historyItems: HistoryItem[] = [
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

const HistoryItem: React.FCX<HistoryItem & FlexProps> = ({ date, event, details, ...props }) => {
  return (
    <Flex overflowX="scroll" {...props}>
      <Box whiteSpace="nowrap">{`${date.year}年${date.month}月`}</Box>
      <Box flexGrow={2} ml={['20px']} whiteSpace="nowrap">
        <Box>{event}</Box>
        <UnorderedList>{details && details.map((item) => <ListItem key={item}>{item}</ListItem>)}</UnorderedList>
      </Box>
    </Flex>
  );
};

const Content: React.FC = () => {
  return (
    <Box px={['1rem']} pt={['1.5rem']} pb={['0.5rem']}>
      {historyItems.map((item) => (
        <HistoryItem my={['0.5rem']} {...item} key={item.event} />
      ))}
    </Box>
  );
};

export const historyData: ProfileSectionProps = {
  sectionHeader: '経歴',
  sectionContent: <Content />,
};

export default historyData;
