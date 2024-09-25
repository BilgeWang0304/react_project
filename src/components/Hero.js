import React from "react";
import "./Hero.scss";
import Restaurant from "../images/restaurant.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-background">
            <div className="hero-container">
                <div className="text">
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="location">Stockholm</h2>
                    <p>
                        Welcome to Little Lemon, your gateway to the vibrant and sun-kissed 
                        flavors of the Mediterranean. 
                        Nestled in the heart of the city, our restaurant offers a cozy escape 
                        where you can indulge in a culinary journey that captures the essence 
                        of Mediterranean life.
                    </p>
                    <Link className="cta" to="/reservation">
                        Reserve a table
                    </Link>
                </div>  
                <div className="hero-image">
                    <img src={Restaurant} alt="Restarurant enviroment" height={300} width={400} style={{
                        flex: '1 1 50%',
                        margin: 'auto',
                        boxShadow: '10px 5px 10px rgba(#f9f6f6, 0.1)', 
                        justifySelf: 'center',
                        borderRadius: '20px',
                        overflow: 'hidden'
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Hero;