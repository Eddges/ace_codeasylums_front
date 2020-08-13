import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ControlledCarousel from './components/TopCarousel/TopCarousel';
import Youtube from './components/Youtube/Youtube';
import Companies from './components/Companies/Companies';
import BenefitsBanner from './components/BenefitsBanner/BenefitsBanner';
import Goals from './components/Goals/Goals';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <ControlledCarousel />
        <BenefitsBanner />
        <Goals />
        {/* <Youtube /> */}
        <Companies />
        {/* <Contact /> */}
        <Footer />
      </div>
    )
  }
}

export default App;
