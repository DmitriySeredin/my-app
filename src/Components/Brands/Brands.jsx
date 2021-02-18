import React from "react";
import style from "./Brands.module.css";
const Brands = () => {
  return (
    <div className={style.brands}>
      <div>
        <h3>МОДНЫЕ БРЕНДЫ</h3>
      </div>
      <ul>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/tommy-hilfiger-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/north-face.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/nike-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/carhartt-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/ellesse-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/dr-martens-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};
export default Brands;
