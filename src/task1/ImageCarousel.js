import React, { useState, useEffect } from "react";
import { fetchImages } from "../api/index";
import Carousel from "react-material-ui-carousel";
import "./styles.css";
import "../task2/ecommerce";
const ImageCarousel = (props) => {
  const [images, setimages] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    fetchImages()
      .then((res) => setimages(res))
      .then(() => setisloading(false));
  }, []);

  return isloading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="center">
      <Carousel navButtonsAlwaysVisible="true">
        {images.map((item, i) => (
          <div key={i}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
