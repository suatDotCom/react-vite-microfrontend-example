import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';

jest.useFakeTimers();

describe('Header Component', () => {
  const headerText = 'Header';

  it('renders correctly', () => {
    render(<Header title={headerText} onSearch={() => {}} />);
    expect(screen.getByText(headerText)).toBeInTheDocument();
  });

  it('calls onSearch when search input changes', () => {
    const searchFunction = jest.fn();
    render(<Header title={headerText} onSearch={searchFunction} />);
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    jest.runAllTimers();
    expect(searchFunction).toHaveBeenCalledWith('test');
  });

  it('header links render correctly', () => {
    render(<Header title={headerText} onSearch={() => {}} />);
    expect(screen.getByRole('link', { name: /design/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /components/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });
});