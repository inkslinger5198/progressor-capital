import React from 'react';
import Home from './components/homepage/Homepage';
import './App.css';
import Approach from './components/approach/Approach';
import Services from './components/services/Services';
import ModernApproach from './components/modernapproach/ModernApproach';

const App = () => {
  return (
    <div>  
      <Home />
      <Approach />
      <ModernApproach />      
      <Services />
    </div>
  )
}

export default App
