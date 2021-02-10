import React from "react";
import style from "./Range.module.css";
const Range = () => {
  return (
    <div className={style.range}>
      <div className={style.text}>
        <div className={style.textElement}>
          <h2 className={style.largeText}>РАСПРОДАЖА:</h2>
        </div>
        <div className={style.textElement}>
          <h2 className={style.largeText}>ФИНАЛЬНЫЕ СКИДКИ</h2>
        </div>
        <div className={style.textElement}>
          <h2 className={style.largeText}>(СКОРО ЗАКАНЧИВАЕТСЯ!)</h2>
        </div>
        <div className={style.textElement}>
          <p className={style.smallText}>ДО -80%</p>
        </div>
      </div>
      <div className={style.slider}>
        <div>
          <button></button>
        </div>
        <ul className={style.carusel}>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/brave-soul-padded-hooded-longline-jacket-in-black/22607484-1-black?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>КУРТКИ И ПАЛЬТО</span>
              </div>
            </a>
          </li>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/bolongaro-trevor-skinny-jeans-in-dark-indigo/21425673-1-blue?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>ДЖИНСЫ</span>
              </div>
            </a>
          </li>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/adidas-originals-gazelle-vintage-trainers-in-green-suede/22158521-1-green?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>ОБУВЬ</span>
              </div>
            </a>
          </li>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/asos-actual-oversized-teddy-borg-hoodie-with-applique-logo-colour-block/21894064-1-navy?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>ХУДИ И СВИТШОТЫ</span>
              </div>
            </a>
          </li>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/soul-star-zip-thru-check-flannel-shirt-with-double-pocket-in-red/20193734-1-red?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>РУБАШКИ</span>
              </div>
            </a>
          </li>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/brave-soul-high-neck-jumper-in-bottle-green/21752014-1-bottlegreen?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>ВЯЗАНЫЕ ВЕЩИ</span>
              </div>
            </a>
          </li>
          <li className={style.list}>
            <a className={style.a} href="">
              <img
                src="https://images.asos-media.com/products/burton-menswear-tapered-crop-trousers-in-khaki/22288105-4?$XXL$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <div>
                <span>БРЮКИ</span>
              </div>
            </a>
          </li>
        </ul>
        <div>
          <button></button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Range;
