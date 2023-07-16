import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Tags from "../../components/Tags";
import Collapse from "../../components/collapse";
import NotFound from "../Notfound/notfound_page";

function Lodging() {
  var [appartements, setAppartements] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/data/logements.json")
      .then((response) => {
        setAppartements(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des appartements :",
          error
        );
      });
  }, []);
  const { id } = useParams();

  const filteredAppartement = appartements.find(
    (appartement) => appartement.id === id
  );
  if (filteredAppartement) {
    return (
      <div>
        <Header />
        <div className="backgroundlodgingcontainer">
          <img
            className="backgroundlodging"
            alt="background showing the lodging"
            src={filteredAppartement.cover}
          ></img>
        </div>
        <div className="underbackgroundcontent">
          <div className="infocontainer">
            <h1 className="appartementtitle">{filteredAppartement.title}</h1>
            <p className="location">{filteredAppartement.location}</p>
            <div className="tagscontainer">
              {filteredAppartement.tags.map((tag, index) => (
                <Tags key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className="hostcontainer">
            <div className="host">
              <p className="hostname">{filteredAppartement.host.name}</p>
              <img
                className="hostpicture"
                alt="host"
                src={filteredAppartement.host.picture}
              ></img>
            </div>
          </div>
        </div>
        <div className="collapseslodgingparent">
          <Collapse
            parentclassname="collapselodging"
            childclassname="collapselodgingchild"
            title="Description"
            content={filteredAppartement.description}
          />
          <Collapse
            parentclassname="collapselodging"
            childclassname="collapselodgingchild"
            title="Équipements"
            content={filteredAppartement.equipments}
          />
        </div>
        <Footer />
      </div>
    );
  } else {
    return <NotFound />;
  }
}

export default Lodging;
