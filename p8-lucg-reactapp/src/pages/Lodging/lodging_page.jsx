import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Tags from "../../components/Tags";
import Collapse from "../../components/collapse";
import NotFound from "../Notfound/notfound_page";
import Slideshow from "../../components/slideshow";

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
    const equipments = filteredAppartement.equipments.map(
      (equipment, index) => (
        <React.Fragment key={index}>
          {equipment}
          <br />
        </React.Fragment>
      )
    );
    return (
      <div>
        <Header />

        <Slideshow pictures={filteredAppartement.pictures} />

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
              <div className="stars">
                {Array.from({ length: filteredAppartement.rating }).map(
                  (_, index) => (
                    <svg
                      key={index}
                      className="starmargin"
                      width="25"
                      height="25"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M7.43233 1.3376C7.29777 1.05833 7.01344 0.880615 6.70117 0.880615C6.38891 0.880615 6.10711 1.05833 5.97001 1.3376L4.3376 4.6964L0.691971 5.23462C0.387322 5.28032 0.133448 5.49358 0.0395141 5.78553C-0.0544193 6.07749 0.0217428 6.39992 0.240075 6.61572L2.88544 9.2332L2.26091 12.9322C2.21014 13.2368 2.33707 13.5466 2.58841 13.7268C2.83975 13.9071 3.17232 13.9299 3.4465 13.7852L6.70371 12.0462L9.96091 13.7852C10.2351 13.9299 10.5677 13.9096 10.819 13.7268C11.0703 13.544 11.1973 13.2368 11.1465 12.9322L10.5194 9.2332L13.1648 6.61572C13.3831 6.39992 13.4618 6.07749 13.3654 5.78553C13.2689 5.49358 13.0176 5.28032 12.7129 5.23462L9.06474 4.6964L7.43233 1.3376Z"
                        fill="#FF6060"
                      />
                    </svg>
                  )
                )}
                {Array.from({ length: 5 - filteredAppartement.rating }).map(
                  (_, index) => (
                    <svg
                      key={index}
                      className="starmargin"
                      width="25"
                      height="25"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M7.43233 1.3376C7.29777 1.05833 7.01344 0.880615 6.70117 0.880615C6.38891 0.880615 6.10711 1.05833 5.97001 1.3376L4.3376 4.6964L0.691971 5.23462C0.387322 5.28032 0.133448 5.49358 0.0395141 5.78553C-0.0544193 6.07749 0.0217428 6.39992 0.240075 6.61572L2.88544 9.2332L2.26091 12.9322C2.21014 13.2368 2.33707 13.5466 2.58841 13.7268C2.83975 13.9071 3.17232 13.9299 3.4465 13.7852L6.70371 12.0462L9.96091 13.7852C10.2351 13.9299 10.5677 13.9096 10.819 13.7268C11.0703 13.544 11.1973 13.2368 11.1465 12.9322L10.5194 9.2332L13.1648 6.61572C13.3831 6.39992 13.4618 6.07749 13.3654 5.78553C13.2689 5.49358 13.0176 5.28032 12.7129 5.23462L9.06474 4.6964L7.43233 1.3376Z"
                        fill="#E3E3E3"
                      />
                    </svg>
                  )
                )}
              </div>
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
            content={equipments}
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
