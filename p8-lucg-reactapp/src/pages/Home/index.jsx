import React from 'react';
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import landscapesea from '../../assets/images/landscapesea.png'
import '../../assets/styles/main.scss'
import LodgingCard from '../../components/lodging_card';
import axios from "axios" ;




function Home() {
  var [appartements, setAppartements] = React.useState([]);
  React.useEffect(() => {
    axios.get('/data/logements.json')
      .then(response => {
        setAppartements(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des appartements :', error);
      });
  }, []);
  return (
    <div className='HomeParent'>
      <Banner />
      <div className='imagebanner'>
        <img className='landscapesea' alt='Rocky sea landscape' src={landscapesea}></img>
        <p className='textoversea'>Chez vous, partout et ailleurs</p>
      </div>
      <div className='lodgingcardscontainer'>
        {appartements.map((appartement, index) => (
        <LodgingCard 
        key={index}
        image={appartement.cover}
        title={appartement.title}
        />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
