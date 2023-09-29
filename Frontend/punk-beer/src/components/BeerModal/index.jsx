import { createPortal } from "react-dom";
import { StyledBeerModal } from "./style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { apiPunk } from "../../services/axiosPunkUser";

export const BeerModal = () => {
  const { handleBeerModal, selectedBeer } = useContext(AuthContext);
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const ViewBeers = async () => {
      try {
        const response = await apiPunk.get(`beers/${selectedBeer}`);
        setBeer(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    ViewBeers();
  }, [selectedBeer]);

  const modalBeerContent = (
    <StyledBeerModal>
      <div className="modalBeer">
        <div className="headerModal">
          <h2 className="titleModal">View More</h2>
          <button onClick={() => handleBeerModal()} className="btCloseModal">
            X
          </button>
        </div>
        <ul className="areaInformation">
          <li>
            <h1 className="beerTitle">{beer.name}</h1>
            <p className="beerInformations">
              <em>Tagline: </em>
              {beer.tagline}
            </p>
            <p className="beerInformations">
              <em>Since:</em> {beer.first_brewed}
            </p>
            <p className="beerInformations">
              <em>Alcohol by Volume:</em> {beer.abv}%
            </p>
            <p className="beerInformations">
              <em>PH:</em> {beer.ph}
            </p>
            <p className="beerInformations">
              <em>IBU:</em> {beer.ibu}%
            </p>
            <p className="beerInformations">
              <em>Attenuation level:</em> {beer.attenuation_level}%
            </p>
            <p className="beerInformations">
              <em>Description:</em> {beer.description}
            </p>
            <p className="beerInformations">
              <em>Food suggestions:</em> {beer.food_pairing}
            </p>
            <p className="beerInformations">
              <em>Contributions:</em> {beer.contributed_by}
            </p>
          </li>
        </ul>
      </div>
    </StyledBeerModal>
  );
  return createPortal(
    modalBeerContent,
    document.getElementById("modalBeer-root")
  );
};
