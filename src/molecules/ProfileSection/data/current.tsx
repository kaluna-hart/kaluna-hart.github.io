import React from 'react';
import { Text } from 'sancho';
import { TProfileSectionProps } from '..';
import Container from '../../../atoms/Container';

const contentHeader = '現在';
const living = '東京都在住';
const work = '現職の業務：メールシステムの運用・保守';
const programingLanguage = '使用言語：rust, typescript, react, python';
const others = 'その他：競技プログラミング特訓中(rust)';
const list: string[] = [living, work, programingLanguage, others];

const Content: React.FCX = () => {
  return (
    <Container>
      {list.map((item) => (
        <Text variant="h3" wrap={false} key={item}>
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
