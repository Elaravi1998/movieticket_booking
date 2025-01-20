import React from 'react';
import Navbar from './components/Navbar';
import Imgcarousel from './components/ImgCarousel';
import Login from './components/Login';
import VTSShowPremiere from './VTSShowPremiere';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Imgcarousel />
      <Login/>
      <VTSShowPremiere />
      <Accordion />
      <Footer />

    </div>
  );
}

export default App;      