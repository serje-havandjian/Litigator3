import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import "./index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



ReactDOM.render(
  <BrowserRouter >
  <div id="App">
      <App />
  </div>
  
  </BrowserRouter>,
  document.getElementById('root')
);