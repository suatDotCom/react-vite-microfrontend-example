import styled, { css } from 'styled-components';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const sizeStyles = {
  small: css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  medium: css`
    padding: 12px 20px;
    font-size: 16px;
  `,
  large: css`
    padding: 16px 24px;
    font-size: 18px;
  `
};

const variantStyles = {
  primary: css`
    background-color: #5394ad;
    color: white;
    &:hover:not(:disabled) {
      background-color: #2c5282;
    }
  `,
  secondary: css`
    background-color: #718096;
    color: white;
    &:hover:not(:disabled) {
      background-color: #4a5568;
    }
  `,
  outline: css`
    background-color: transparent;
    border: 2px solid #5394ad;
    color: #5394ad;
    &:hover:not(:disabled) {
      background-color: #ebf8ff;
    }
  `,
};

const StyledButton = styled.button<ButtonProps & { $fullWidth?: boolean }>`
  border-radius: 8px;
  border: none;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  width: ${props => props.$fullWidth ? '100%' : 'auto'};

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }

  ${props => sizeStyles[props.size || 'medium']}
  ${props => variantStyles[props.variant || 'primary']}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onClick && !disabled) {
      onClick();
    }
  };

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      $fullWidth={fullWidth}
      className={className}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 