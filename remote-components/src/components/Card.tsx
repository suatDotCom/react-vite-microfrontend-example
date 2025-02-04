import styled, { css } from 'styled-components';

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

const paddingStyles = {
  small: css`padding: 16px;`,
  medium: css`padding: 24px;`,
  large: css`padding: 32px;`
};

const getVariantStyles = (isClickable: boolean) => ({
  default: css`
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    ${isClickable && css`
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
    `}
  `,
  elevated: css`
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    ${isClickable && css`
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      }
    `}
  `,
  outlined: css`
    border: 1px solid #e2e8f0;
    ${isClickable && css`
      &:hover {
        background-color: #f7fafc;
      }
    `}
  `
});

const StyledCard = styled.div<CardProps & { isClickable: boolean }>`
  border-radius: 12px;
  background-color: ${props => props.backgroundColor || 'white'};
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  text-align: ${props => props.textAlign || 'left'};
  color: ${props => props.textColor || '#2d3748'};
  max-width: ${props => props.maxWidth || '100%'};
  min-height: ${props => props.minHeight || 'auto'};
  box-sizing: border-box;
  display: block;

  ${props => paddingStyles[props.padding || 'medium']}
  ${props => getVariantStyles(props.isClickable)[props.variant || 'default']}
`;

const CardTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: inherit;
`;

const CardContent = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const Card = ({
  title,
  children,
  onClick,
  variant = 'default',
  padding = 'medium',
  className,
  fullWidth = false,
  textAlign = 'left',
  backgroundColor,
  textColor,
  maxWidth,
  minHeight
}: CardProps) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      onClick={onClick}
      isClickable={!!onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e: React.KeyboardEvent) => e.key === 'Enter' && onClick() : undefined}
      className={className}
      fullWidth={fullWidth}
      textAlign={textAlign}
      backgroundColor={backgroundColor}
      textColor={textColor}
      maxWidth={maxWidth}
      minHeight={minHeight}
    >
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card; 