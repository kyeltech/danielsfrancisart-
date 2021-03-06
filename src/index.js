import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
// using chakra ui for wrapping
import { ChakraProvider } from "@chakra-ui/react"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(  
  <BrowserRouter>
  <ChakraProvider>
  <App />

  </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
