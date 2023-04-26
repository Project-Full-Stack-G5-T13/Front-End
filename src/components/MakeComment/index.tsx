import { useNavigate } from "react-router-dom";
import { Div } from "./styled";
import img from "../../assets/default-user-image.png"

function MakeComments() {
	const navigate = useNavigate();
	return (
		<>
			<Div>
				<section>
					<div className="profile-comment">
						<img src={img} alt="" />
						<h4>Samuel Leão</h4>
					</div>
					<div className="inputDiv">
						<input type="text" placeholder="Carro muito confortável, foi uma ótima experiência de compra..."/>
						<button>Comentar</button>
					</div>
				</section>
				<div className="pre-phrase">
					<span>Gostei muito!</span>
					<span>Incrível</span>
					<span>Recomendarei para meus amigos</span>
				</div>
			</Div>
		</>
	);
}

export default MakeComments;
  