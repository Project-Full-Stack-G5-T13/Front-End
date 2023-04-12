import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import car from "../../assets/carro.png"
import { Section } from "./styled";

function Dashboard() {
	
  const navigate = useNavigate();
  
  return (
    <>
			<Header />
			<Section>
				<div>
					<img src={car} alt="" />
				</div>
			</Section>
    </>
  );
}
  
export default Dashboard;
  