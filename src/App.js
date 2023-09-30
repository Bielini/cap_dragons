import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { theme } from "./theme/theme";
import Camera from "./pages/camera/camera";
import Camera2 from "./pages/camera/camera2";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout >
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
