import "../../styles/App.css";
import "./suits.css";
import React from "react";
import { Gallery } from "./Gallery";
import Footer from "../Footer";

export const Suits = () => {
  const gallery = [
    {
      image: "/gallery/suit-1.png",
      name: "THE DIAMOND TUXEDO IN VIRGIN WOOL",
      price: "$1,695.00",
    },
    {
      image: "/gallery/suit-2.png",
      name: "ATTICUS BURGUNDY THREE PIECE",
      price: "$2,295.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
    {
      image: "/gallery/suit-3.png",
      name: "THREE PIECE TUXEDO WITH CONTRASTING VEST",
      price: "$1,510.00",
    },
  ];

  return (
    <>
      <section className="suits-section1 mt-10 ">
        <div className="gallery-container">
          {gallery.map((suit) => {
            return (
              <Gallery image={suit.image} name={suit.name} price={suit.price} />
            );
          })}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
