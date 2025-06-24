import './style.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        {/* <Navigation /> - You need to import or create this component */}
        {/* <ChatBubble/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add your routes here */}
        </Routes>
      </Router>
    </StrictMode>
  );
}