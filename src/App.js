import {  HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import NavigBar from './components/navigBar';
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage';

function App() {
  return (
    <Router>
      <NavigBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
