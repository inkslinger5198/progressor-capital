import React from 'react';
import Home from './components/homepage/Homepage';
import './App.css';
import Approach from './components/approach/Approach';
import Services from './components/services/Services';
import ModernApproach from './components/modernapproach/ModernApproach';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>  
      <Home />
      <Approach />
      <ModernApproach />      
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App
