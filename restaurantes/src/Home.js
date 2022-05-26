import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-food-food-snack-eating-goods-image_14522.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Restaurante la Zarzuela"
            direction= "Av. 6 D 36N-18, Cali Hotel Spiwak"
            rating={4}
            image="https://media-cdn.tripadvisor.com/media/photo-s/06/b2/8b/fd/restaurante-la-zarzuela.jpg"
          />
          <Product
            id="49538094"
            title="Platillos Voladores"
            direction="Av. 3 Nte #7-19"
            rating={5}
            image="https://platillosvoladores.com/wp-content/uploads/2019/09/platillos_south.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Antigua Contemporanea"
            direction="Cra. 10 #1-39"
            rating={3}
            image="https://asset1.zankyou.com/images/wervice-card-big/c78/3d46/1050/800/w/60185/-/1539850564.jpg"
          />
          <Product
            id="23445930"
            title="Storia D'Amore Granada"
            direction="Av. 9 Nte #14-57"
            rating={5}
            image="https://restaurantescali.yoveo.net/sites/default/files/styles/grande_600x600_/public/restaurantes/2020-03/restaurante-storia-d-amore-01.jpg?itok=PqdgsNQl"
          />
          <Product
            id="3254354345"
            title="Casa Ibérica Cali"
            direction="Cl. 3a Oe #3-07"
            rating={4}
            image="https://media-cdn.tripadvisor.com/media/photo-s/18/12/2b/e9/mesas.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Cantina La 15 Granada Cali"
            direction="Cl 15 Nte #9N-62"
            rating={5}
            image="https://www.cantinala15.com/wp-content/uploads/2019/07/espacio-cantina-3-1.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
