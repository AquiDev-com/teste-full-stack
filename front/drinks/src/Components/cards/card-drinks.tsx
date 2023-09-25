import { IBeer } from "../../Interfaces/punkContext.interface";
import { CardDrinkStyle } from "./style-card-drink";

export const CardDrink = (drink: IBeer) => {
  return (
    <>
      <CardDrinkStyle key={drink.id}>
        <div>
          <img src={drink.image_url} alt={drink.name} />
        </div>
        <p>{drink.name}</p>
        <p>Teor Alcoólico: {drink.abv}</p>
        <p>Amargor: {drink.ibu}</p>
        <p>Primeira fabricação: {drink.first_brewed}</p>
      </CardDrinkStyle>
    </>
  );
};
