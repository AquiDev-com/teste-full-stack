import { useContext } from "react";
import { PunkContext } from "../../Contexts/punk.context";
import { CardDrink } from "../../Components/cards/card-drinks";
import { DashboardMain } from "./dashboardStyle";

export const DashboardPage = () => {
  const { drinks } = useContext(PunkContext);
  return (
    <DashboardMain>
      <div>
        <ul>
          {drinks?.map((drink) => (
            <CardDrink
              id={drink.id}
              name={drink.name}
              image_url={drink.image_url}
              ph={drink.ph}
              abv={drink.abv}
              first_brewed={drink.first_brewed}
              ibu={drink.ibu}
            />
          ))}
        </ul>
      </div>
    </DashboardMain>
  );
};
