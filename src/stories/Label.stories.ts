import type { Meta, StoryObj } from '@storybook/react';
import Label from '@/shared/ui/Label/index';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // 스토리북상 에서 보여지는 경로
  title: 'Example/Label',
  // 실제 컴포넌트
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 컴포넌트 Props 인터페이스 내 주석
    // description 또는 defaultValue 를 사용하여 문서화
    htmlFor: { control: 'color', description: 'label의 for 속성' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    htmlFor: 'label',
    children: 'Label',
  },
};


