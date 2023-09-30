import { ThemeProvider } from '@mui/material';
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { darkTheme, lightTheme, theme } from "./theme/theme";
import Camera from "./pages/camera/camera";
import Camera2 from "./pages/camera/camera2";
import { Login } from "./pages/login/Login";
import { useCallback, useEffect, useState } from "react";

const isDarkThemeKey = 'isDarkTheme';
let item = false;

function App() {
  const [ isDarkTheme, setIsDarkTheme ] = useState(item);

  const handleChangeTheme = useCallback(() => {
    setIsDarkTheme((isDarkTheme) => {
      if (typeof window !== 'undefined') localStorage.setItem(isDarkThemeKey, `${isDarkTheme}`);

      return !isDarkTheme;
    });
  }, [ isDarkTheme ]);

  useEffect(() => {
    item = localStorage.getItem(isDarkThemeKey) === 'false';
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout isDarkTheme={isDarkTheme} onThemeToggle={handleChangeTheme} >
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Camera />} />
            <Route path="/1" element={<Camera2 />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
