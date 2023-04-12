import { useNavigate } from "react-router-dom";
import { Main } from "./styled";
import HomeFilter from "../../components/HomeFilter";
import CarList from "../../components/CarList";
import HomePainel from "../../components/HomePainel";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <>
			<HomePainel/>
			<Main>
				<HomeFilter/>
				<CarList/>
			</Main>
    </>
  );

}

export default Dashboard;
