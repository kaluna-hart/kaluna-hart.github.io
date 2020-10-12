import { getMdxFiles, getMetadata } from '../libs/article-loader';
import { metadata as testMetadata } from '../../articles/test.mdx';
import { metadata as tmuxMetadata } from '../../articles/tmux-fundamental-commands.mdx';
import { metadata as typescriptMetadata } from '../../articles/typescript-declare-module.mdx';

test('getMdxFiles', (): void => {
  const mdxFiles: string[] = getMdxFiles();
  expect(mdxFiles).toEqual(['test.mdx', 'tmux-fundamental-commands.mdx', 'typescript-declare-module.mdx']);
});

test('getMetadata', (): void => {
  expect(getMetadata()).toBe([
    { pid: 'test', metadata: testMetadata },
    { pid: 'tmux-fundamental-commands', metadata: tmuxMetadata },
    { pid: 'typescript-declare-module', metadata: typescriptMetadata },
  ]);
});
