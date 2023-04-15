import { Card } from "./Card.styled";
import { Friend } from "./FriendItem";

export const FriendList = ({ friends }) => {
    return (
        <div>
            <ul>
                {friends.map(friend => (
                    <Card key={friend.id}>
                        <Friend friend={friend} />  
                    </Card>))}
             </ul>
        </div>
    );
};

// import PropTypes from 'prop-types';
// import { FriendListItem } from '../FriendCard/FriendCard';
// import { List, ListItem } from './FriendsList.styled';

// export const FriendsList = ({ items }) => {
//   return (
//     <List>
//       {items.map(item => (
//         <ListItem key={item.id}>
//           <FriendListItem item={item} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// FriendsList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };