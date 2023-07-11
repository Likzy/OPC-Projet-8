import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";import '../../assets/styles/main.scss'
import LodgingCard from '../../components/lodging_card';
import axios from "axios" ;
import { Link } from 'react-router-dom';




function About() {
  
  return (
    <div className='AboutParent'>
      <Header />
      
      <Footer />
    </div>
  );
}

export default About;