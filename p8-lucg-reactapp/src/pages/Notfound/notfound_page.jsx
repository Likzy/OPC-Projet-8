import React from "react";
import Banner from "../../components/header";
import Footer from "../../components/footer";
import "../../assets/styles/main.scss";

function NotFound() {
  return (
    <div className="errorpageparent">
      <Banner />
      <h1 className="big404">404</h1>
      <h2 className="text404">Oups! La page que vous demandez n'existe pas.</h2>
      <a className="redirect404" href="/">
        Retourner sur la page d’accueil
      </a>
      <Footer />
    </div>
  );
}

export default NotFound;
