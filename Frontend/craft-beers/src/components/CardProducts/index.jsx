/* eslint-disable react/prop-types */
import { CardProduct } from "./cardProducts";

export const CardProducts = ({ element }) => {

  return (
    <CardProduct key={element.id}>
      <img src={element.image_url
} alt={element.image_url
} className="imgProduct" />
      <div className="divLi">
        <h2>{element.name}</h2>
        <span>{element.tagline}</span>
        <span>Alcohol by volume:{element.abv}%</span>
        <span>Ibu:{element.ibu}%</span>
      </div>
    </CardProduct>
  );
};
