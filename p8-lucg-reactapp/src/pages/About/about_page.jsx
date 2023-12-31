import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../assets/styles/main.scss";
import Collapse from "../../components/collapse";

function About() {
  return (
    <div className="AboutParent">
      <Header />
      <div className="aboutpicturebanner"></div>
      <div className="collapsecontainer">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
      régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Securité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
      correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
      locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
      également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>

      <Footer />
    </div>
  );
}

export default About;
