import { StyledBody_2_500, StyledBody_1_600 } from "../../styles/typografy";
import { StyledUserAvatar } from "./styled";

interface IUserAvatarProps {
	user: {
		name: string;
		image_url: string | null;
	};
}

const UserAvatar = ({ user }: IUserAvatarProps) => {
	return (
		<StyledUserAvatar>
			{user.image_url ? (
				<img src={user.image_url} alt="user image profile" />
			) : (
				<div>{user.name[0].toUpperCase()}</div>
			)}
			<StyledBody_2_500>{user.name}</StyledBody_2_500>
		</StyledUserAvatar>
	);
};

export default UserAvatar;
