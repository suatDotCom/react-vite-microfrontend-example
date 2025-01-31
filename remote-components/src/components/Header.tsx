import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #262626;
  margin-right: 48px;
`;

const SearchIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.35-4.35M11 6a5 5 0 015 5v0a5 5 0 01-5 5v0a5 5 0 01-5-5v0a5 5 0 015-5"
    />
  </svg>
);

const LoadingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="#1677ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
      className="loading-circle"
    />
  </svg>
);

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 320px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #8c8c8c;

  svg.loading-circle {
    animation: ${rotate} 1s linear infinite;
  }
`;

const ShortcutBadge = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  font-size: 12px;
  color: #8c8c8c;
  pointer-events: none;

  span {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 100px 0 38px;
  font-size: 14px;
  color: #262626;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  &::placeholder {
    color: #8c8c8c;
  }

  &:hover {
    background: #ffffff;
    border-color: #e0e0e0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  }

  &:focus {
    background: #ffffff;
    border-color: #1677ff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.08);
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 24px;
`;

const NavLink = styled.a`
  color: #595959;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #1677ff;
  }
`;

interface HeaderProps {
  title?: string | React.ReactNode;
  showSearch?: boolean;
  navigationLinks?: Array<{
    label: string;
    url: string;
    external?: boolean;
  }>;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  showShortcut?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title = '',
  showSearch = true,
  navigationLinks = [
    { label: 'Design', url: '/design' },
    { label: 'Components', url: '/components' },
    { label: 'GitHub', url: 'https://github.com/suatDotCom', external: true }
  ],
  onSearch,
  searchPlaceholder = 'Search...',
  showShortcut = true
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      onSearch?.(value);
    }, 500);
  };

  return (
    <HeaderContainer>
      <Logo>{title}</Logo>
      {showSearch && (
        <SearchContainer>
          <IconWrapper>
            {isLoading ? <LoadingIcon /> : <SearchIcon />}
          </IconWrapper>
          <SearchInput 
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearch}
          />
          {showShortcut && (
            <ShortcutBadge>
              <span>⌘</span>
              <span>K</span>
            </ShortcutBadge>
          )}
        </SearchContainer>
      )}
      <Nav>
        {navigationLinks.map((link, index) => (
          <NavLink 
            key={index} 
            href={link.url}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </NavLink>
        ))}
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 