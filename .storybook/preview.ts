import type { Preview } from '@storybook/react';
// 폰트 경로 지정
import '@fontsource/noto-sans-kr'; // Defaults to weight 400
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
