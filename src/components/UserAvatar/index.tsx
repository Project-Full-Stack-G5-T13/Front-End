import { StyledBody_2_500, StyledBody_1_600 } from "../../styles/typografy";
import { StyledUserAvatar } from "./styled";
import { IUserAvatarProps } from "../../interface/user/user.interface";
import { useState } from "react";

const UserAvatar = ({ user }: IUserAvatarProps) => {
	const [imageValid, setImageValid] = useState(true);
	return (
		<StyledUserAvatar>
			<div className="img_container">
				{user.image_url && imageValid ? (
					<img
						src={user.image_url}
						alt="user image profile"
						onError={() => setImageValid(false)}
					/>
				) : (
					<div>
						{user.name.split(" ")[0][0].toLocaleUpperCase() +
							(user.name.split(" ")[1]?.[0].toLocaleUpperCase() ||
								"")}
					</div>
				)}
			</div>
			<StyledBody_2_500>{user.name}</StyledBody_2_500>
		</StyledUserAvatar>
	);
};

export default UserAvatar;
