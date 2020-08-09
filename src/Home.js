import React from 'react';
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            {/* Pruduct id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id={1}
                    title="Panasonic DMC-FZ2500GA Bridge Camera (Black)"
                    price={58999}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/91DpmERviEL._SL1500_.jpg"
                />
                <Product
                    id={2}
                    title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                    price={9749}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id={3}
                    title="Fitbit Charge 3 Fitness Activity Tracker (Rose Gold and Blue Grey) with Offer on Accessory
                    "
                    price={13999}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ojyIZsF8L._SL1500_.jpg"
                /><Product
                    id={4}
                    title="Apple iPhone 11 (128GB) - (Product) RED"
                    price={72600}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
                /><Product
                    id={5}
                    title="VEGA Pro Touch 1800-2000 Hair Dryer (VHDP-02), Black"
                    price={1899}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tAVx2zElL._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id={6}
                    title="Samsung 138 cm (55 Inches) 4K Ultra HD Smart QLED TV QA55Q60RAKXXL (Black) (2019 Model)
                    "
                    price={83399.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/918kUwIXQoL._SL1500_.jpg"
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
