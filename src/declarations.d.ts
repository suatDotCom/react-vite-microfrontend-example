declare module 'remoteComponents/Button' {
  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }
  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}

declare module 'remoteComponents/Card' {
  interface CardProps {
    title?: string;
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'default' | 'elevated' | 'outlined';
    padding?: 'small' | 'medium' | 'large';
    className?: string;
    fullWidth?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    textColor?: string;
    maxWidth?: string;
    minHeight?: string;
  }
  const Card: React.ComponentType<CardProps>;
  export default Card;
}

declare module 'remoteComponents/Header' {
  interface HeaderProps {
    title?: string | React.ReactNode;
    showSearch?: boolean;
    navigationLinks?: Array<{
      label: string;
      url: string;
      external?: boolean;
    }>;
    onSearch?: (value: string) => void;
    searchPlaceholder?: string;
    showShortcut?: boolean;
  }
  const Header: React.ComponentType<HeaderProps>;
  export default Header;
} 