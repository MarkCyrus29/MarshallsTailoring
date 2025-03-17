import "./suits.css";
import "../../styles/App.css";

export const Gallery = ({ image, name, price }) => {
  return (
    <>
      <div className="gallery ">
        <img className="block" src={image} />
        <p className="name block">{name}</p>
        <p className="price block">{price}</p>
      </div>
    </>
  );
};
