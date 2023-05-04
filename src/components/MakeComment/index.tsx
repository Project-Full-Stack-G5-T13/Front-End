import { useNavigate } from "react-router-dom";
import { Div } from "./styled";
import img from "../../assets/default-user-image.png"
import { useContext } from "react";
import { AdsContext, IComment } from "../../contexts/AdsContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateComment } from "../../validations";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

function MakeComments() {
	const { setComments, comments } = useContext(AdsContext);
	const { user } = useContext(UserContext);

	const {
		setValue,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IComment>({
		resolver: yupResolver(schemaCreateComment)
	});

	const createComment = async (payload: any) => {

		const token = window.localStorage.getItem("@Motors:token");

		api.defaults.headers.authorization = `Bearer ${token}`;

		const response = await api.post(`/comments/${"cf8fa196-5992-4281-aa88-07a49044c6b9"}`, payload);
		setComments([response.data, ...comments]);

		setValue("description", "");
	};

	const navigate = useNavigate();
	return (
		<>
			<Div>
				<section>
					{user &&
						<div className="profile-comment">
							<img
								src={user.image_url.startsWith("https://") ? user.image_url : img}
								alt={`foto de perfil de ${user.name}`}
							/>
							<h4>{user.name}</h4>
						</div>
					}
					<form className="inputDiv" onSubmit={handleSubmit(createComment)}>
						<input
							{...register("description")}
							type="text"
							placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
						/>
						<button type="submit" disabled={!user}>Comentar</button>
					</form>
					<div className="error-message">{errors.description && errors.description.message}</div>
				</section>
				<div className="pre-phrase">
					<span onClick={() =>
						setValue("description", "Gostei muito!")
					}>
						Gostei muito!
					</span>
					<span onClick={() =>
						setValue("description", "Incrível")
					}>
						Incrível
					</span>
					<span onClick={() =>
						setValue("description", "Recomendarei para meus amigos")
					}>
						Recomendarei para meus amigos
					</span>
				</div>
			</Div>
		</>
	);
}

export default MakeComments;
