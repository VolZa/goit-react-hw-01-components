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


