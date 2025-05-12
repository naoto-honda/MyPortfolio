import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
