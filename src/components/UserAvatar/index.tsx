import {
	StyledBody_2_500,
	StyledBody_1_600,
	StyledHeading_6_600,
} from "../../styles/typografy";
import { StyledUserAvatar } from "./styled";
import { IUserAvatarProps } from "../../interface/user/user.interface";
import { Children, useState } from "react";

const UserAvatar = ({ user, vertical, bold, children }: IUserAvatarProps) => {
	const [imageValid, setImageValid] = useState(true);
	return (
		<StyledUserAvatar vertical={vertical}>
			<div className="imgContainer">
				{user.image_url && imageValid ? (
					<img
						src={user.image_url}
						alt="user image profile"
						onError={() => setImageValid(false)}
					/>
				) : (
					<div className="defaultImage">
						{user.name.split(" ")[0][0].toLocaleUpperCase() +
							(user.name.split(" ")[1]?.[0].toLocaleUpperCase() ||
								"")}
					</div>
				)}
			</div>
			<div className="userInfo">
				{vertical ? (
					<StyledHeading_6_600>{user.name}</StyledHeading_6_600>
				) : bold ? (
					<StyledBody_1_600>{user.name}</StyledBody_1_600>
				) : (
					<StyledBody_2_500>{user.name}</StyledBody_2_500>
				)}

				{children}
			</div>
		</StyledUserAvatar>
	);
};

export default UserAvatar;
