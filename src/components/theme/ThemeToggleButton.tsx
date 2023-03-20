import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import styled from '@emotion/styled';


const StyledSwitchBackground = styled('div')<{ theme: string }>`
  display: inline-flex;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${props =>
          props.theme === 'light'
                  ? 'var(--chakra-colors-orange-200)'
                  : 'var(--chakra-colors-purple-500)'};
`;

const StyledSwitchButton = styled('button')<{ isActive: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
          props.isActive ? 'rgb(255, 255, 255)' : 'transparent'};
  color: ${props => (props.isActive ? 'rgb(0, 0, 0)' : 'inherit')};
`;

export const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState<boolean>(() => {
    const storedColorMode = typeof localStorage !== 'undefined' && localStorage.getItem('chakra-ui-color-mode');
    return storedColorMode ? storedColorMode === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches;
  });

  const toggleTheme = () => {
    setIsLightMode(prevMode => !prevMode);
    toggleColorMode();
  };

  return (
    <StyledSwitchBackground theme={isLightMode ? 'light' : 'dark'}>
      <StyledSwitchButton
        onClick={toggleTheme}
        aria-label="Toggle theme"
        isActive={isLightMode}
      >
        <SunIcon />
      </StyledSwitchButton>
      <StyledSwitchButton
        onClick={toggleTheme}
        aria-label="Toggle theme"
        isActive={!isLightMode}
      >
        <MoonIcon />
      </StyledSwitchButton>
    </StyledSwitchBackground>
  );
};
