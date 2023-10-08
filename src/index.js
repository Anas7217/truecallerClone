import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from "./theme/theme.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
    {/* <ChakraBaseProvider> */}
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);

