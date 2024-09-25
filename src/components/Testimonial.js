import "./Testimonial.scss";
import Image1 from "../images/p1.jpg";
import Image2 from "../images/p2.jpg";
import Image3 from "../images/p3.jpg";
import Image4 from "../images/p4.jpg";
import { ReactComponent as Star } from "../images/star.svg";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <section className="testimonials-wrap">
          <p className="heading">What people say about us !</p>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image1} alt="Customer" />
              </div>
              <p className="name">Gabriella</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              The flavors at this Mediterranean restaurant are absolutely authentic and vibrant! Every dish feels like a trip to the Mediterranean coast—so fresh and beautifully seasoned.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image2} alt="Customer" />
              </div>
              <p className="name">Nicholas</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              This Mediterranean gem is a feast for the senses! The fragrant herbs, tender meats, and fresh veggies blend perfectly in every bite. The grilled octopus and baklava are a revelation—absolutely unforgettable.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image3} alt="Customer" />
              </div>
              <p className="name">Amelia</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              Every dish here tells a story of the Mediterranean coast. The vibrant, zesty flavors burst with authenticity, from the tangy tzatziki to the perfectly charred kebabs. Pair it with a glass of wine, and you've got the ultimate Mediterranean experience!
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image4} alt="Customer" />
              </div>
              <p className="name">Tommy</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Dining here feels like being transported to a sun-soaked Greek island. The pita is warm and fluffy, the olives are perfectly briny, and the seafood is the freshest I've had outside of the Mediterranean. A true culinary escape!
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials