import { useParams } from "react-router-dom";
import { Div } from "./styled";
import img from "../../assets/default-user-image.png";
import { useContext } from "react";
import { AdsContext, IComment } from "../../contexts/AdsContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateComment } from "../../validations";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import * as io from "socket.io-client";
import UserAvatar from "../UserAvatar";

const socket = io.connect(import.meta.env.VITE_BACKEND_HOST);

function MakeComments() {
	const { comments } = useContext(AdsContext);
	const { user } = useContext(UserContext);

	const { id } = useParams();

	const {
		setValue,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IComment>({
		resolver: yupResolver(schemaCreateComment),
		mode: "onChange",
	});

	const createComment = async (payload: IComment) => {
		const token = window.localStorage.getItem("@Motors:token");

		api.defaults.headers.authorization = `Bearer ${token}`;
		const response = await api.post(`/comments/${id}`, payload);

		socket.emit("create_comment", {
			comments: [response.data, ...comments],
			id,
		});

		setValue("description", "");
	};

	return (
		<>
			<Div>
				<section>
					{user && (
						<div className="profile-comment">
							<UserAvatar user={user} bold />
						</div>
					)}
					<form
						className="inputForm"
						onSubmit={handleSubmit(createComment)}
					>
						<textarea
							maxLength={250}
							{...register("description")}
							placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
						></textarea>
						<button type="submit" disabled={!user}>
							Comentar
						</button>
					</form>
					<div className="error-message">
						{errors.description && errors.description.message}
					</div>
				</section>
				<div className="pre-phrase">
					<span
						onClick={() => setValue("description", "Gostei muito!")}
					>
						Gostei muito!
					</span>
					<span onClick={() => setValue("description", "Incrível")}>
						Incrível
					</span>
					<span
						onClick={() =>
							setValue(
								"description",
								"Recomendarei para meus amigos"
							)
						}
					>
						Recomendarei para meus amigos
					</span>
				</div>
			</Div>
		</>
	);
}

export default MakeComments;
