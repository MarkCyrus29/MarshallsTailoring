import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider";
import "./home.css";
import React from "react";
import "../../styles/App.css";
import Footer from "../footer";

export const Home = () => {
  const slides = [
    { url: "/images/image-1.png", title: "beach" },
    { url: "/images/image-2.png", title: "boat" },
    { url: "/images/image-3.png", title: "forest" },
  ];

  return (
    <>
      <section className="home-section1 xs:h-dvh xs:mt-0 ">
        <div className="container-styles ">
          <ImageSlider slides={slides} />
          <div className="slider-content xs: bottom-0 md:bottom-14 lg:bottom-16 xl:bottom-20">
            <h2 className="block lg:h">
              <strong className="xs:text-md">Marshalls Tailoring</strong>
            </h2>
            <p className="block xs:text-xs sm:text-sm md:text-base">
              We customize suits for weddings / uniforms etc.
            </p>
            <Link to="/contacts">
              <button className="block ">Connect with us</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-section2">
        <div className="section2">
          <div style={{ outline: "solid 1px #171717", width: "100%" }}>
            <h1 className="block font-bold">OUR CLIENTS</h1>
          </div>

          <div className="clients lg:grid-cols-2">
            <img src="https://picsum.photos/500/360" className="block" />
            <div className="client lg:pt-0">
              <p className="client-name block">CLIENT NAME</p>
              <p className="client-desc block ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam illum esse natus cumque necessitatibus soluta ad!
                Nesciunt voluptatibus in ex enim cum. Accusamus voluptas
                ducimus, tenetur hic eum itaque aut?
              </p>
            </div>
            <div className="client  ">
              <p className="client-name block">CLIENT NAME</p>
              <p className="client-desc  block">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam illum esse natus cumque necessitatibus soluta ad!
                Nesciunt voluptatibus in ex enim cum. Accusamus voluptas
                ducimus, tenetur hic eum itaque aut?
              </p>
            </div>
            <img src="https://picsum.photos/500/360" className="block " />
          </div>
        </div>
      </section>
      <section className="home-section3">
        <div className="section3 w-3/4">
          <h1 className="block font-bold">WHY CHOOSE US?</h1>
          <p className="block ">
            At our tailoring shop, we pride ourselves on providing a timely,
            personalized, and high-quality experience for every customer. We
            believe in crafting each suit with precision, ensuring a perfect fit
            that enhances both comfort and style. Whether you're looking for a
            custom design or need alterations, our expert team is dedicated to
            bringing your vision to life, all while delivering exceptional
            service that fits seamlessly into your busy lifestyle. Choose us for
            an unparalleled tailoring experience that prioritizes your
            satisfaction at every step.
          </p>
        </div>
      </section>
      <section className="home-section4">
        <div className="section4 lg:grid-cols-3 xs:w-100dvw xs:justify-center">
          <div className="trait xs:p-0 xs:w-9/12">
            <img src="/icons/time.png" className="trait-img block" />
            <p className="trait-title block">Timely Service</p>
            <p className="trait-desc block">
              We respect your time, ensuring your tailored suit is delivered
              promptly without compromising on quality.
            </p>
          </div>
          <div className="trait xs:p-0 xs:w-9/12">
            <img src="/icons/personalized.png" className="trait-img block" />
            <p className="trait-title block">Personalized Fit</p>
            <p className="trait-desc block">
              Every suit is crafted to your unique measurements, offering a
              personalized experience that reflects your style and preferences.
            </p>
          </div>
          <div className="trait xs:p-0 xs:w-9/12">
            <img src="/icons/quality.png" className="trait-img block" />
            <p className="trait-title block">Quality</p>
            <p className="trait-desc block">
              The tailors ensure that each garment is made to perfection,
              offering you a suit that exudes quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
