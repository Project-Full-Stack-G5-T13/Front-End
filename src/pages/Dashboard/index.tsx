import { useNavigate } from "react-router-dom";
import ContainerDash from "./styled";
import Header from "../../components/Header";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <ContainerDash>
      <Header/>
    </ContainerDash>
  );
}

export default Dashboard;
