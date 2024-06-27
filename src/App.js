import './styles/App.css';
import { ThemeProvider } from '@mui/material';
import theme from './themeProvider'
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
