import { useNavigate } from "react-router-dom";
import maincars from "../../assets/cars1.png";
import { Section } from "./styled";

function HomePainel() {  
  
	const navigate = useNavigate();

	
	return (
    	<Section>
        <img src={maincars} alt="" />
        <div>
          <h2 >Motors shop</h2>
          <p> A melhor plataforma de anúncios de carro do país</p>			
        </div>
    	</Section>
    );
  }
  
  export default HomePainel;