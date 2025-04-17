import { useState } from "react";
import "./home.css";
import { useEffect } from "react";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 7000); // Change image every 10 seconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [currentIndex]);

  return (
    <>
      <div className="slider-styles">
        <div
          className="left-arrow xs:opacity-100 lg:opacity-0"
          onClick={goToPrev}
        >
          ❰
        </div>
        <div
          className="right-arrow xs:opacity-100 lg:opacity-0"
          onClick={goToNext}
        >
          ❱
        </div>
        <div
          className="slide-styles "
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
        ></div>
        <div className="blurry-overlay"></div>
      </div>
    </>
  );
};
