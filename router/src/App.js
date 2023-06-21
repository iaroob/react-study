import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
