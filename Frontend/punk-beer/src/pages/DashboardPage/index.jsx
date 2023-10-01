import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { StyledDashboardPage } from "./style";
import { apiPunk } from "../../services/axiosPunkUser";
import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";
import { BeerModal } from "../../components/BeerModal";
import { FilterModal } from "../../components/FilterModal";

export const DashboardPage = () => {
  const {
    user,
    newLoading,
    modalIsBeerOpen,
    handleBeerModal,
    modalIsFilterOpen,
    filteredBeer,
    handleFilterModal,
  } = useContext(AuthContext);
  const [beer, setBeer] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENUSER");
    localStorage.removeItem("@USER_ID");
  };

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await apiPunk.get(
          `beers?page=${currentPage}&per_page=${itemsPerPage}`
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBeers();
  }, [currentPage, itemsPerPage]);

  const paginate = (newPage) => {
    setCurrentPage(newPage);
  };

  const cancelFilter = () => {
    window.location.reload();
  };

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledDashboardPage>
          <header className="headerDashboard">
            <img src={logo} alt="logo da punk beer" className="logo" />
            <button className="btComeBackLogin" onClick={goLoginClick}>
              Go out
            </button>
          </header>

          <HeaderLogged />

          <div className="areaBtFilter">
            <button
              onClick={() => handleFilterModal()}
              className="btFilterDash"
            >
              Filter
            </button>
            {filteredBeer.length > 0 && (
              <button onClick={() => cancelFilter()} className="btFilterDash">
                Cancel
              </button>
            )}
          </div>

          {filteredBeer.length === 0 ? (
            <main className="mainBeer">
              <ol className="areaBeer">
                {beer.map((element) => (
                  <li key={element.id} className="cardBeer">
                    <div>
                      <h1 className="nameBeer">{element.name}</h1>
                      <h2 className="sinceBeer">
                        since: {element.first_brewed}
                      </h2>
                      <h2 className="taglineBeer">{element.tagline}</h2>
                      <h3 className="alcoholBeer">
                        Alcohol by Volume: {element.abv}%
                      </h3>
                      <h3 className="ibuBeer">IBU: {element.ibu}%</h3>
                    </div>

                    <img
                      src={element.image_url}
                      className="imageBeer"
                      alt="beer image"
                    />

                    <button
                      onClick={() => {
                        handleBeerModal(element.id);
                      }}
                      className="btViewMore"
                    >
                      view more
                    </button>
                  </li>
                ))}
              </ol>
            </main>
          ) : (
            <main className="mainBeer">
              <ol className="areaBeer">
                {filteredBeer.map((element) => (
                  <li key={element.id} className="cardBeer">
                    <div>
                      <h1 className="nameBeer">{element.name}</h1>
                      <h2 className="sinceBeer">
                        since: {element.first_brewed}
                      </h2>
                      <h2 className="taglineBeer">{element.tagline}</h2>
                      <h3 className="alcoholBeer">
                        Alcohol by Volume: {element.abv}%
                      </h3>
                      <h3 className="ibuBeer">IBU: {element.ibu}%</h3>
                    </div>

                    <img
                      src={element.image_url}
                      className="imageBeer"
                      alt="beer image"
                    />

                    <button
                      onClick={() => {
                        handleBeerModal(element.id);
                      }}
                      className="btViewMore"
                    >
                      view more
                    </button>
                  </li>
                ))}
              </ol>
            </main>
          )}

          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`btPagination ${currentPage === 1 ? "disabled" : ""}`}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              className="btPagination"
            >
              Next
            </button>
          </div>
          <Footer />
          {modalIsBeerOpen && <BeerModal />}
          {modalIsFilterOpen && <FilterModal />}
        </StyledDashboardPage>
      )}
    </>
  );
};
