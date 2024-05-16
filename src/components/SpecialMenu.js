import React from "react";
import "./SpecialMenu.scss";
import Bruchetta from "../images/bruchetta.jpg";
import Greeksalad from "../images/greeksalad.jpg";
import Lemon from "../images/lemondessert.jpg";
import { Link } from "react-router-dom";

const SpecialMenu = () => {
  return (
      <div className="special">
        <div className="special-header">
          <h1 className="header-title">Specials for this week!</h1>
          <Link className="cta" to="/404">
            Online Menu
          </Link>
        </div>
  
        <div className="sp-items">
          <div className="sp-item">
            <div className="img">
              <img src={Greeksalad} alt="Greeksalad" />
            </div>
            <div className="content">
              <div className="heading">
                <p className="title">GreekSalad</p>
                <p className="price">SEK129</p>
                <p className="info">
                Dive into the crisp freshness of our Traditional Greek Salad, a vibrant celebration of Mediterranean flavors. This classic dish features juicy tomatoes, crisp cucumbers, sliced red onions, and green bell peppers, all tossed with rich Kalamata olives and creamy feta cheese. 
                </p>
              </div>
            </div>
          </div>
        


          <div className="sp-item">
            <div className="img">
              <img src={Bruchetta} alt="Bruchetta" />
            </div>
            <div className="content">
              <div className="heading">
                <p className="title">Bruchetta</p>
                <p className="price">SEK169</p>
                <p className="info">
                Experience a taste of Italy with our Artisan Bruchetta. We start with freshly grilled slices of ciabatta bread, each piece rubbed with garlic and topped with a vibrant mix of chopped heirloom tomatoes, fresh basil, and extra virgin olive oil.
                </p>
              </div>
            </div>
          </div>
        


          <div className="sp-item">
            <div className="img">
              <img src={Lemon} alt="Lemon Dessert" />
            </div>
            <div className="content">
              <div className="heading">
                <p className="title">Lemon Dessert</p>
                <p className="price">SEK69</p>
                <p className="info">
                Indulge in our Heavenly Lemon Delight, a dessert that balances tart and sweet with a luxurious touch. Crafted from an authentic recipe, this dessert features layers of silky lemon cream set atop a crumbly, buttery biscuit base. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SpecialMenu