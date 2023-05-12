import Container from "./styled";
import MotorshopLogo from "../../assets/Motorshoplogo.png";

const Footer = () => {
  return (
    <Container>
      <div>
        <figure>
          <img src={MotorshopLogo} alt="Logo do site" />
        </figure>
        <p> © 2023 - Todos os direitos reservados.</p>
        <section>
          <a href = "#inicio">^</a>
        </section>
      </div>
    </Container>
  );
};

export default Footer;
