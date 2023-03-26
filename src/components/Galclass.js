import React, { useState } from "react";
import GalaxyCard from "./GalaxyCard";
import SeleCard from "./SeleCard";
import "./Galclass.css";

const images = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
];

const Galclasspage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="galclass-container">
      <div className="galclass-left">
        <button onClick={prevImage} className="galclass-left__prev"></button>
        <button onClick={nextImage} className="galclass-left__next"></button>
        <GalaxyCard imageUrl={images[currentImageIndex]} />
      </div>
      <div className="galclass-right">
        <SeleCard />
      </div>
    </div>
  );
};

export default Galclasspage;
