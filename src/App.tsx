import './App.css';
import { Layout } from './components/layout/Layout';
import { ROUTES } from './routing/Routes';
import { Theme } from './libs/Theme';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeInitializer } from './components/theme/ThemeInitializer';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <ThemeInitializer />
        <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
          <Routes>
            {Object.values(ROUTES).map(({ path, Component, fullWidth }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Layout fullWidth={fullWidth}>
                  <Component />
                  </Layout>
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
