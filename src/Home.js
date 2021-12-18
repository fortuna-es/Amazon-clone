import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

const bannerI = ["https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg","https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg", "https://m.media-amazon.com/images/I/615udh+CEmL._SX3000_.jpg", "https://m.media-amazon.com/images/I/615udh+CEmL._SX3000_.jpg" ,"",
  "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg","https://m.media-amazon.com/images/I/61Q6BYGdNxL._SX3000_.jpg"
];

function Home() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    setBanner(bannerI[Math.floor(Math.random() * bannerI.length)]);
    return banner;
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />
        <div className="home__row">
          <Product
            id="12321341"
            title="Razer Blade 14 inch Gaming Laptop: 14 inch QHD 165Hz, 16GB RAM, 1TB SSD"
            price={1999.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/611VQf95rxL._AC_UL800_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV"
            price={139.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51qqhKNAMbL._AC_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo | Smart speaker with Alexa"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321339"
            title="Lenovo Tab M10 Plus, 10.3 inch FHD Android Tablet"
            price={234.86}
            rating={4}
            image="https://m.media-amazon.com/images/I/71sfODG+c+L.a.jpg"
          />
          <Product
            id="49538048"
            title="ASUS Chromebook Flip C433 2 in 1 14 inch Touchscreen Laptop"
            price={333.63}
            rating={4}
            image="https://m.media-amazon.com/images/I/81cpLDD+SPL._AC_SL1500_.jpg"
          />
          <Product
            id="49538099"
            title="Goplus Full Size 4 String Electric Bass Guitar"
            price={300.89}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Amj0OXnmL._AC_SL1200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
