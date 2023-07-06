import React from 'react';
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import landscapesea from '../../assets/images/landscapesea.png'
import '../../assets/styles/main.scss'

function Home() {
  return (
    <div className='HomeParent'>
      <Banner />
      <div className='imagebanner'>
        <img className='landscapesea' alt='Rocky sea landscape' src={landscapesea}></img>
        <p className='textoversea'>Chez vous, partout et ailleurs</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
