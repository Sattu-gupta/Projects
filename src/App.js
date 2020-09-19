import React from 'react';

import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
//import "../node_modules/bootstrap/dist/css/bootstrap.css";

// function App() {
//   return (
//     <div className="App">
//      <Navbar />
//      <Hero /> 
//      <About />        
//     </div>
//   );
// }

const App = () =>{
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <About /> 
      <Services />  
      <Portfolio />  
      <Testimonials />   
      <Pricing />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
