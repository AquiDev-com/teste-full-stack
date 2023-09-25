import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { StyledDashboardPage } from "./style";
import { apiPunk } from "../../services/axiosPunkUser";

export const DashboardPage = () => {
  const { user, newLoading } = useContext(AuthContext);
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await apiPunk.get("beers");
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loading && getBeers();
  }, [loading]);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
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
          <main>
            <ul>
              {beer.map((element) => (
                <li key={element.id}>
                  <img src={element.image_url} className="" alt="" />
                </li>
              ))}
            </ul>
          </main>
        </StyledDashboardPage>
      )}
    </>
  );
};
