import { useNavigate } from "react-router-dom";
import HeaderStyled from "./styled";
import logo from "../../assets/logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);

  window.addEventListener("resize", function () {
    setWidthWindow(window.innerWidth);
  });

  return (
    <HeaderStyled>
      <div className="container-header">
        <img src={logo} alt="Motors shop" />
        {widthWindow < 768 && !menu && (
          <VscThreeBars onClick={() => setMenu(!menu)} />
        )}

        {widthWindow < 768 && menu && (
          <p onClick={() => setMenu(!menu)} className="closed-menu">
            X
          </p>
        )}

        {widthWindow > 768 && (
          <div className="desktop-menu">
            <p onClick={() => navigate("/login")}>Fazer Login</p>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
          </div>
        )}
      </div>

      {widthWindow < 768 && menu && (
        <div className="mobile">
          <p>Carros</p>
          <p>Motos</p>
          <p>Leilão</p>
          <p>Fazer Login</p>
          <button>Cadastrar</button>
        </div>
      )}
    </HeaderStyled>
  );
}

export default Header;
