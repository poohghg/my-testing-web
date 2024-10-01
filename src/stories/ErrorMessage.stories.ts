import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '@/shared/ui/ErrorMessage';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // 스토리북상 에서 보여지는 경로
  title: 'Example/ErrorMessage',
  // 실제 컴포넌트
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 컴포넌트 Props 인터페이스 내 주석
    // description 또는 defaultValue 를 사용하여 문서화
    children: { control: 'text', description: '에러 메시지' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: '에러 메시지',
  },
};

