import PropTypes from 'prop-types';

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


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};