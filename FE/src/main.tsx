import './style.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Committee from './Pages/Comitte/comittee';
/*import Domain from './Pages/Domin/domain';*/
import Speaker from './Pages/Speaker/speakers';
import Dates from './Pages/dates/dates';
import Details from './Pages/details/details';
import Registration from './Pages/registration/registration';
import Navigation from './Components/NavBar/NavBar'; // Ensure this component is created or imported correctly
import Footer from './Components/Footer/Footer';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        <Navigation /> {/* Ensure this component is created or imported correctly */}
        {/* <Navigation /> - You need to import or create this component */}
        {/* <ChatBubble/> */}        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/details" element={<Details />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </Router>
    </StrictMode>
  );
}