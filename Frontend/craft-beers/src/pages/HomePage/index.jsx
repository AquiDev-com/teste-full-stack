import { useContext, useState } from "react";
import { ContainerHome } from "./homePage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CardProducts } from "../../components/CardProducts";
import logo from "../../assets/logo.png";

export const HomePage = () => {
  const { drinks } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const productsFilter = !search
  ? drinks
  : drinks.filter((element) => {
      if (typeof element.name === 'string') {
        return (
          element.name.toLowerCase().includes(search.toLowerCase()) 
        );
      }
    });
    
  function logout() {
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENUSER");
    localStorage.removeItem("@ID");
  }

  return (
    <ContainerHome>
      <div className="container">
      <div className="divHeader">
        <img src={logo} alt="logo" className="imgLogo" />
      <input type="text" placeholder="Digite a cerveja que deseja" required
          value={search}
          onChange={(event) => setSearch(event.target.value)} />
        <div className="divForm">
        <div className="divButton">
          <button className="buttonSair" onClick={logout}>Sair</button>
        </div>
        </div>
      </div>
      <div className="divUl">
        <ul className="ulCard">
            {productsFilter?.map((element) => (
                <CardProducts key={element.id} element={element}/>
            ))}
    
        </ul>
      </div>
      </div>
    </ContainerHome>
  );
};
