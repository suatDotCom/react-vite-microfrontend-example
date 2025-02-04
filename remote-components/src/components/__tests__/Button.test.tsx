import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  it('renders button with correct text', () => {
    const buttonText = 'Test Button';
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click Me';
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className when provided', () => {
    const customClassName = 'custom-class';
    const buttonText = 'Custom Button';
    render(<Button className={customClassName}>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toHaveClass(customClassName);
  });

  it('is accessible via keyboard', () => {
    const handleClick = jest.fn();
    const buttonText = 'Accessible Button';
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    
    const button = screen.getByText(buttonText);
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter' });
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 