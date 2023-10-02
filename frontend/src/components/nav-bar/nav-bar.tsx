import "./nav-bar.css";

function NavBar() {
	return (
		<nav className="nav">
				<a className="home">
					<img className="logo" src="/beer.png"></img>
				</a>
				<h1>Barril de Surpresas</h1>

				<button className="login" onClick={() => true}>Login</button>
		
		</nav>
	);
}
export default NavBar;
