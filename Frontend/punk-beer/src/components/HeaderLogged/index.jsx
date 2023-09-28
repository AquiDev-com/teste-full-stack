import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledHeaderLogged } from "./style";

export const HeaderLogged = () => {
  const { user, newLoading } = useContext(AuthContext);

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledHeaderLogged>
          <header className="headerLogged">
            <img
              src={user.image}
              alt="imagem do usuário logado"
              className="userImage"
            />
            <div className="areaUser">
              <p className="hello">Hello! &#127867;</p>
              <p className="userName">{user.name}</p>
            </div>
          </header>
        </StyledHeaderLogged>
      )}
    </>
  );
};
