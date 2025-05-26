import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Page/Home';
import Product from './Page/Product';
import Footer from './components/Footer';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/single-product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
