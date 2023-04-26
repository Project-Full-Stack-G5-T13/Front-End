import { useNavigate } from "react-router-dom";
import { HeaderStyled, ModalOptionsProfile } from "./styled";
import logo from "../../assets/logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { UserContext } from "../../contexts/UserContext";
import {
	StyledButton_brand_outline_medium,
	StyledButton_white_outline,
} from "../../styles/buttons";
import UserAvatar from "../UserAvatar";
import { Button } from "../../pages/SignUp/styled";

function Header() {
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);
	const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);
	const [menuProfile, setMenuProfile] = useState(false);

	const { user, setUser, getUser } = useContext(UserContext);

	window.addEventListener("resize", function () {
		setWidthWindow(window.innerWidth);
	});

	console.log("user header", user);

	useEffect(() => {
		getUser();
	}, []);

	function logout() {
		setMenuProfile(!menuProfile);
		setMenu(!menu);
		setUser(null);
		localStorage.removeItem("@Motors:token");
		localStorage.removeItem("@Motors:userId");
		navigate("/login");
	}

	return (
		<>
			<HeaderStyled>
				<div className="container_header">
					<img src={logo} alt="Motors shop" />

					{widthWindow <= 768 && (
						<button
							className="burguer_menu"
							onClick={() => {
								setMenu(!menu);
								setMenuProfile(!menuProfile);
							}}
						>
							{menu ? "X" : <VscThreeBars />}
						</button>
					)}

					{widthWindow <= 768 && !user && menu && (
						<div className="mobile_options">
							<StyledButton_white_outline
								onClick={() => {
									setMenu(false);
									navigate("/login");
								}}
							>
								Fazer login
							</StyledButton_white_outline>

							<StyledButton_white_outline
								onClick={() => {
									setMenu(false);
									navigate("/register");
								}}
							>
								Cadastrar
							</StyledButton_white_outline>
						</div>
					)}

					{widthWindow > 768 && !user && (
						<div className="desktop_options">
							<StyledButton_white_outline onClick={() => navigate("/login")}>
								Fazer login
							</StyledButton_white_outline>

							<StyledButton_white_outline onClick={() => navigate("/register")}>
								Cadastrar
							</StyledButton_white_outline>
						</div>
					)}
					{widthWindow > 768 && user && (
						<div
							className="desktop_options"
							onClick={() => setMenuProfile(!menuProfile)}
						>
							<UserAvatar user={user}></UserAvatar>
						</div>
					)}

					{user && menuProfile && (
						<ModalOptionsProfile>
							<div>
								<button>Editar Perfil</button>
								<button>Editar Endereço</button>
								<button onClick={() => { navigate(`/profile/${user.id}`)}}>
									{user.is_seller}Meus Anúncios
								</button>
								<button onClick={() => logout()}>Sair</button>
							</div>
						</ModalOptionsProfile>
					)}
				</div>
			</HeaderStyled>
		</>
	);
}

export default Header;
