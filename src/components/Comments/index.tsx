import { useNavigate } from "react-router-dom";
import { Div } from "./styled";
import img from "../../assets/default-user-image.png"

function Comments() {

  const navigate = useNavigate();
  
  return (
    <>
			<Div>
				<h3>Comentários</h3>
				<section>
					<div className="profile-comment">
						<img src={img} alt="" />
						<h4>Júlia Lima</h4>
						<span>Há 2 dias atrás</span>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>	
				</section>
				<section>
					<div className="profile-comment">
						<img src={img} alt="" />
						<h4>Júlia Lima</h4>
						<span>Há 2 dias atrás</span>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p>	
				</section>
			</Div>
    </>
  );
}

export default Comments;
  