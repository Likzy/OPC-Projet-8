import React from "react";
import prevArrowImage from "../assets/images/prevarrow.png";
import nextArrowImage from "../assets/images/nextarrow.png";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="backgroundlodgingcontainer">
      <button className="prevarrow" onClick={handlePrev}>
        <img src={prevArrowImage} alt="Previous" />
      </button>
      <img
        className="backgroundlodging"
        src={pictures[currentIndex]}
        alt="Slideshow"
      />
      <button className="nextarrow" onClick={handleNext}>
        <img src={nextArrowImage} alt="Next" />
      </button>
    </div>
  );
}

export default Slideshow;
