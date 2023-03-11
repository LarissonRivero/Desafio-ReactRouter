import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Form from './views/Form';
import NotFound from './views/NotFound';
import Footer from './components/Footer';

function App() {
  return (
   <div className="App">
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
