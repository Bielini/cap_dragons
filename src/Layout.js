import { Box } from '@mui/material';
import { Header } from "./components/Header";

export const Layout = ({ children, isDarkTheme, onThemeToggle }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header isDarkTheme={isDarkTheme} onThemeToggle={onThemeToggle}/>

      <Box flexGrow={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};