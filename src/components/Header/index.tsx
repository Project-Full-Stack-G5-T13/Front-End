import { useNavigate } from "react-router-dom";
import { HeaderStyled, ModalOptionsProfile } from "./styled";
import logo from "../../assets/logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);
	const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);
	const [autenticated, setAutenticated] = useState(false);
	const [menuProfile, setMenuProfile] = useState(false);

	window.addEventListener("resize", function () {
		setWidthWindow(window.innerWidth);
	});

	return (
		<>
			<HeaderStyled>
				<div className="container-header">
					<img src={logo} alt="Motors shop" />
					{widthWindow <= 768 && !menu && (
						<VscThreeBars
							className="svg-menu"
							onClick={() => {
								setMenu(!menu);
								setMenuProfile(!menuProfile);
							}}
						/>
					)}

					{widthWindow <= 768 && menu && (
						<p
							onClick={() => {
								setMenu(!menu);
								setMenuProfile(!menuProfile);
							}}
							className="closed-menu"
						>
							X
						</p>
					)}

					{widthWindow > 768 && !autenticated && (
						<div className="desktop-menu">
							<p onClick={() => navigate("/login")}>
								Fazer Login
							</p>
							<button onClick={() => navigate("/register")}>
								Cadastrar
							</button>
						</div>
					)}

					{widthWindow > 768 && autenticated && (
						<div className="profile">
							<div onClick={() => setMenuProfile(!menuProfile)}>
								<p onClick={() => setMenuProfile(!menuProfile)}>
									VQ
								</p>
							</div>
							<p onClick={() => setMenuProfile(!menuProfile)}>
								Vinicius Quirino
							</p>
							<MdKeyboardArrowDown
								className="svg-profile"
								onClick={() => setMenuProfile(!menuProfile)}
							/>
						</div>
					)}
				</div>

				{widthWindow <= 768 && menu && !autenticated && (
					<div className="mobile">
						<p>Carros</p>
						<p>Motos</p>
						<p>Leilão</p>
						<p onClick={() => navigate("/login")}>Fazer Login</p>
						<button onClick={() => navigate("/register")}>
							Cadastrar
						</button>
					</div>
				)}
			</HeaderStyled>

			{autenticated && menuProfile && (
				<ModalOptionsProfile>
					<div>
						<p>Editar Perfil</p>
						<p>Editar Endereço</p>
						<p>Meus Anúncios</p>
						<p>Sair</p>
					</div>
				</ModalOptionsProfile>
			)}
		</>
	);
}

export default Header;
