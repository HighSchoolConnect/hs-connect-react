import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import { ChakraProvider } from '@chakra-ui/react'
// import rootReducer from './state/reducers/rootReducer';




// Initialize Firebase



ReactDOM.render(
  <React.StrictMode>

    <ChakraProvider>
      <App />
    </ChakraProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

