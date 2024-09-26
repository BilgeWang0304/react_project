import "./About.scss";
import chef from "../images/chef.jpg";
import ourfood from "../images/ourfood.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
          <div className="text-content">
            <h2 className="heading">Little Lemon</h2>
            <h3 className="location">Stockholm</h3>
            <div className="desc">
                Welcome to Little Lemon, your gateway to the vibrant and sun-kissed 
                flavors of the Mediterranean. 
                Nestled in the heart of the city, our restaurant offers a cozy escape 
                where you can indulge in a culinary journey that captures the essence 
                of Mediterranean life.
                At Little Lemon, we pride ourselves on using only the freshest, 
                locally-sourced ingredients to craft dishes that are as nutritious as 
                they are delicious. Our menu is a celebration of the rich tapestry of 
                Mediterranean cuisine, featuring a variety of traditional and 
                contemporary dishes that speak to the soul of the region.
                Join us for a meal, and let us transport you to the shores of the 
                Mediterranean with every bite. Whether you're craving the robust 
                flavors of a perfectly grilled fish, the crisp freshness of a Greek 
                salad, or the comforting embrace of a homemade pasta, Little Lemon 
                has something to delight every palate.
                Welcome to Little Lemon—where good food meets the warmth of the 
                Mediterranean.
            </div>
          </div>
          <section className="img-wrap">
            <img src={chef} alt="Our chef cooking at kitchen"  />
            <img src={ourfood} alt="Our food" />
          </section>
        </div>
    </section>
  );
};

export default About;
