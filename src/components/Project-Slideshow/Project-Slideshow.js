import React from "react";
import "./Project-Slideshow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Project_Slideshow(props) {
  return (
    <div className="Project-Slideshow" id={props.name}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <h2>{props.name}</h2>
      </a>
      <Carousel>
        {props.images.map((image) => (
          <div>
            <img src={image.url} alt={image.altText} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Project_Slideshow;
