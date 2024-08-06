import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, CssBaseline } from '@mui/material';
import AttendanceAnalysis from './components/upload/AttendanceAnalysis.js';
import { HomeRoutes } from "./routes/routes.jsx";
import App from './components/Frontpage/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <>
      <App />
      <CssBaseline />
      <Container>
        {/* <AttendanceAnalysis /> */}
      </Container>
      <HomeRoutes />
    </>
  </React.StrictMode>
);
