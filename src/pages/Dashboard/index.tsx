import { useNavigate } from "react-router-dom";
import { Main } from "./styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeFilter from "../../components/HomeFilter";
import CarList from "../../components/CarList";
import HomePainel from "../../components/HomePainel";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
			<HomePainel/>
			<Main>
				<HomeFilter/>
				<CarList/>
			</Main>
      <Footer />
    </>
  );
}

export default Dashboard;
