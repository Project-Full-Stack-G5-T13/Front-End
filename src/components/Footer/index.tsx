import Container from "./styled";
import React from "react";
import MotorshopLogo from "../../assets/Motorshoplogo.png"
const Footer = () => {
  return (
    <Container>
      <div>
        <figure>
          <img src={MotorshopLogo} alt="Logo do site" />         
        </figure>
        <p> © 2023 - Todos os direitos reservados.</p>
        <a href="#">^</a>        
      </div>
    </Container>
  );
};

export default Footer;