import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledHeaderLogged } from "./style";
import perfilImagem from "../../assets/perfilImage.png";

export const HeaderLogged = () => {
  const { user, newLoading } = useContext(AuthContext);

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledHeaderLogged>
          <header className="headerLogged">
            {!user.image ? (
              <img
                src={perfilImagem}
                alt="Profile image"
                className="userImage"
              />
            ) : (
              <img
                src={user.image}
                alt="Logged in user image"
                className="userImage"
              />
            )}

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
