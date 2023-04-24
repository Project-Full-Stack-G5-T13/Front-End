import { StyledBody_2_500, StyledBody_1_600 } from "../../styles/typografy";
import { StyledUserAvatar } from "./styled";

interface IUserAvatarProps {
	user: {
		name: string;
		image_url?: string;
	};
}

const UserAvatar = ({ user }: IUserAvatarProps) => {
	console.log(user);
	return (
		<StyledUserAvatar>
			<div className="img_container">
				{user.image_url ? (
					<img src={user.image_url} alt="user image profile" />
				) : (
					<div>{user.name[0].toUpperCase()}</div>
				)}
			</div>
			<StyledBody_2_500>{user.name}</StyledBody_2_500>
		</StyledUserAvatar>
	);
};

export default UserAvatar;
