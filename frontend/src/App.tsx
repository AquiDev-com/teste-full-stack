import "./App.css";
import "./index.css";
import NavBar from "./components/nav-bar/nav-bar";
import backGroundImage from "./assets/background.jpeg";

function App() {

	return (
		<div className="page">
			<NavBar />
			<main>
				<div className="card">
					<img src={backGroundImage} alt="imagem de cerveja" />
					<div className="card-text">
						<p>
							Aqui a cerveja é mais do que uma bebida; é uma paixão que
							cultivamos com dedicação e amor. Desde o nosso início, temos
							trabalhado incansavelmente para criar experiências sensoriais
							inigualáveis através de cervejas artesanais excepcionais.
						</p>
						<p>
							Nossa jornada na cervejaria começou com um sonho: criar cervejas
							que desafiam as expectativas e elevam o paladar a novos patamares.
							Nossos mestres cervejeiros são verdadeiros artistas, e cada
							cerveja é uma obra-prima de sabor, equilíbrio e criatividade. Nós
							abraçamos as tradições cervejeiras, mas também ousamos inovar,
							resultando em uma seleção única de cervejas que surpreendem e
							satisfazem.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
