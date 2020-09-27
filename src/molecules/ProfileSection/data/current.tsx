/** @jsx jsx */
import React from 'react';
import { jsx, Text, Container } from 'theme-ui';
import { TProfileSectionProps } from '..';

const contentHeader = '現在';
const living = '東京都在住';
const work = '現職の業務：メールシステムの運用・保守';
const programingLanguage = '使用言語：rust, typescript, react, python';
const others = 'その他：競技プログラミング特訓中(rust)';
const list: string[] = [living, work, programingLanguage, others];

const Content: React.FCX = () => {
  return (
    <Container sx={{ p: '1em', overflowX: 'scroll', fontSize: '1em' }}>
      {list.map((item) => (
        <Text key={item} sx={{ whiteSpace: 'nowrap', fontSize: '1em' }}>
          {item}
        </Text>
      ))}
    </Container>
  );
};

export const currentData: TProfileSectionProps = {
  sectionHeader: contentHeader,
  sectionContent: <Content />,
};

export default currentData;
