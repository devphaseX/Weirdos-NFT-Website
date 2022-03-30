import 'normalize.css/normalize.css';
import './styles/general/_default.css';
import { BrowserRouter } from 'react-router-dom';
import darkTheme from './styles/variables/_darkTheme.module.css';
import lightTheme from './styles/variables/_lightTheme.module.css';
import Home from './pages/home';
import useThemeDetection from './hooks/useThemeDetection';
import { useLayoutEffect } from 'react';

function App() {
  const theme = useThemeDetection();

  useLayoutEffect(() => {
    document.documentElement.className = `${
      (theme === 'light' ? lightTheme : darkTheme).root
    }`;
  }, [theme]);

  return (
    <div className="app">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
