import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";import '../../assets/styles/main.scss'
import Collapse from '../../components/collapse';




function About() {
  
  return (
    <div className='AboutParent'>
      <Header />
      <Collapse 
      title = "Fiabilité"
      content="Zzz le content"/>
      <Footer />
    </div>
  );
}

export default About;