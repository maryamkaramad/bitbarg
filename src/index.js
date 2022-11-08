import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { Themes } from "./theme/theme"
import { CssBaseline } from '@mui/material';
import { RouterProvider } from "react-router-dom"
import router from './routes/route';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Themes}>
    <RouterProvider router={router} />
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
);


reportWebVitals();
