import { StyledBody_2_500, StyledBody_1_600 } from "../../styles/typografy";
import { StyledUserAvatar } from "./styled";
import { IUserAvatarProps } from "../../interfaces/user/user.interface";


const UserAvatar = ({ user }: IUserAvatarProps) => {
	return (
		<StyledUserAvatar>
			<div className="img_container">
				{user.image_url ? (
					<img src={user.image_url} alt="user image profile" />
				) : (
					<div>{user.name}</div>
				)}
			</div>
			<StyledBody_2_500>{user.name}</StyledBody_2_500>
		</StyledUserAvatar>
	);
};

export default UserAvatar;
