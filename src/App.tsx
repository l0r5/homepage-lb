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
      <Layout>
        <BrowserRouter>
          <Routes>
            {Object.values(ROUTES).map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
