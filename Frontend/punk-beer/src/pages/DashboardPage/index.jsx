import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { StyledDashboardPage } from "./style";
import { apiPunk } from "../../services/axiosPunkUser";
import { Footer } from "../../components/Footer";

export const DashboardPage = () => {
  const { user, newLoading } = useContext(AuthContext);
  const [beer, setBeer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

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

  const paginate = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledDashboardPage>
          <header className="headerDashboard">
            <img src={logo} alt="logo da Kenzie Hub" className="logo" />
            <button className="btComeBackLogin" onClick={goLoginClick}>
              Go out
            </button>
          </header>
          <main className="mainBeer">
            <ul className="areaBeer">
              {beer.map((element) => (
                <li key={element.id} className="cardBeer">
                  <div>
                    <h1 className="nameBeer">{element.name}</h1>
                    <h2 className="sinceBeer">since: {element.first_brewed}</h2>
                    <h2 className="taglineBeer">{element.tagline}</h2>
                    <h3 className="alcoholBeer">
                      Alcohol by Volume: {element.abv}%
                    </h3>
                  </div>

                  <img
                    src={element.image_url}
                    className="imageBeer"
                    alt="beer image"
                  />
                </li>
              ))}
            </ul>
          </main>
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
        </StyledDashboardPage>
      )}
    </>
  );
};
