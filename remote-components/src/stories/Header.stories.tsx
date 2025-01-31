import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Design Systems',
    showSearch: true,
    navigationLinks: [
      { label: 'Design', url: '/design' },
      { label: 'Components', url: '/components' },
      { label: 'GitHub', url: 'https://github.com/suatDotCom', external: true }
    ],
    searchPlaceholder: 'Search...',
    showShortcut: true,
  },
};

export const WithoutSearch: Story = {
  args: {
    title: 'Minimal Header',
    showSearch: false,
    navigationLinks: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
    ],
  },
};

export const CustomNavigation: Story = {
  args: {
    title: 'Custom Nav',
    showSearch: true,
    navigationLinks: [
      { label: 'Products', url: '/products' },
      { label: 'Services', url: '/services' },
      { label: 'Contact', url: '/contact' },
      { label: 'Documentation', url: 'https://docs.example.com', external: true },
    ],
    searchPlaceholder: 'Ara...',
    showShortcut: false,
  },
}; 