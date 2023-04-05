import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <p>teste registro</p>
      <button onClick={() => navigate("/login")}></button>
    </>
  );
};

export default Register;
