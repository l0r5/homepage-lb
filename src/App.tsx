import './App.css';
import { Layout } from './components/Layout';
import { LandingPage } from './components/landing/LandingPage';
import { Theme } from './libs/Theme';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <LandingPage />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
