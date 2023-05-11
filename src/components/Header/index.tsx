import { useNavigate } from "react-router-dom";
import { HeaderStyled, ModalOptionsProfile } from "./styled";
import logo from "../../assets/logo.svg";
import { VscThreeBars, VscClose, VscCloseAll } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledButton_white_outline } from "../../styles/buttons";
import UserAvatar from "../UserAvatar";

import ModalEditUser from "../ModalEditUser";
import ModalEditAddress from "../ModalEditAddress";

function Header() {
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);
	const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);
	const [menuProfile, setMenuProfile] = useState(false);

	const [editUserModal, setEditUserModal] = useState(false);
	const [editAddressModal, setEditAddressModal] = useState(false);

	const { user, setUser, getUser } = useContext(UserContext);

	window.addEventListener("resize", function () {
		setWidthWindow(window.innerWidth);
	});

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

	window.onclick = () => {
		setMenuProfile(false);
		setMenu(false);
	};

	const closeEditUserModal = () => {
		setEditUserModal(false);
	};

	const openEditUserModal = () => {
		setMenuProfile(false);
		setEditUserModal(true);
	};

	const closeEditAddressModal = () => {
		setEditAddressModal(false);
	};

	const openEditAddressModal = () => {
		setMenuProfile(false);
		setEditAddressModal(true);
	};

	const navigateToProfile = () => {
		setMenuProfile(false);
		navigate(`/profile/${user.id}`);
	};

	return (
		<>
			<HeaderStyled>
				<div className="container_header">
					<img
						src={logo}
						alt="Motors shop"
						className="pointer"
						onClick={() => navigate("/")}
					/>

					{widthWindow <= 768 && (
						<button
							className="burguer_menu"
							onClick={(e) => {
								setMenu(!menu);
								setMenuProfile(!menuProfile);
								e.stopPropagation();
							}}
						>
							{menu ? <VscCloseAll /> : <VscThreeBars />}
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
							<StyledButton_white_outline
								onClick={() => navigate("/login")}
							>
								Fazer login
							</StyledButton_white_outline>

							<StyledButton_white_outline
								onClick={() => navigate("/register")}
							>
								Cadastrar
							</StyledButton_white_outline>
						</div>
					)}
					{widthWindow > 768 && user && (
						<div
							className="desktop_options"
							onClick={(e) => {
								e.stopPropagation();
								setMenuProfile(!menuProfile);
							}}
						>
							<UserAvatar user={user}></UserAvatar>
						</div>
					)}

					{user && menuProfile && (
						<ModalOptionsProfile
							onClick={(e) => e.stopPropagation()}
						>
							<div>
								<button
									onClick={() => {
										openEditUserModal();
									}}
								>
									Editar Perfil
								</button>

								<button onClick={() => openEditAddressModal()}>
									Editar Endereço
								</button>

								{user.is_seller && (
									<button
										onClick={() => {
											navigateToProfile();
										}}
									>
										Meus Anúncios
									</button>
								)}

								<button onClick={() => logout()}>Sair</button>
							</div>
						</ModalOptionsProfile>
					)}
				</div>
			</HeaderStyled>
			{editUserModal && <ModalEditUser closeModal={closeEditUserModal} />}

			{editAddressModal && (
				<ModalEditAddress closeModal={closeEditAddressModal} />
			)}
		</>
	);
}

export default Header;
