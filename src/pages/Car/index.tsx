import { useNavigate } from "react-router-dom";
import car from "../../assets/carro.png"
import { Section } from "./styled";

function Dashboard() {

  const navigate = useNavigate();
  
  return (
    <>
			<Section>
				<div>
					<img src={car} alt="" />
				</div>
			</Section>
    </>
  );
}

export default Dashboard;
  