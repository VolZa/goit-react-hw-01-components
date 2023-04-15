import PropTypes from 'prop-types';
import { Avatar } from "components/friends/Avatar.styled";
import { Name } from "./Name.styled";
import { Status } from "./Status.styled";

 export const Friend = ({ friend }) => {
    return (
        <>
            <Status style={{ backgroundColor: (friend.isOnline? "green" : "red") }}></Status>
            <Avatar src={friend.avatar} alt={friend.name} />
            <Name>{friend.name}</Name>
        </>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};