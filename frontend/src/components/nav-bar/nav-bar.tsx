import { useState } from "react";
import "./nav-bar.css";
import LoginOverlay from "../form/login";

function NavBar() {
	const [loginOverlayVisible, setLoginOverlayVisible] = useState(false);

  const handleOpenLoginOverlay = () => {
    setLoginOverlayVisible(true);
  }

  const handleCloseLoginOverlay = () => {
    setLoginOverlayVisible(false);
  }
	return (
		<nav className="nav">
				<a className="home">
					<img className="logo" src="/beer.png"></img>
				</a>
				<h1>Divina Caneca</h1>

				<button className="login" onClick={handleOpenLoginOverlay}>Login</button>
				{loginOverlayVisible && <LoginOverlay onClose={handleCloseLoginOverlay} />}
		
		</nav>
	);
}
export default NavBar;
