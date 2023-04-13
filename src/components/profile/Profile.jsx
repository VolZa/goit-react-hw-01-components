// import { Container } from './Profile.styled';
import PropTypes from 'prop-types';
import { Avatar } from './Avatar.styled';
import { CardUser } from './CardUser.styled';
import { Tag } from './Tag.styled';
import { Title } from './Title.styled';
import { User } from './User.styled';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
    return (
        <User >   
            <CardUser>
                <Avatar src={avatar} alt={userName} />
                <Title>{userName}</Title>
                <Tag>@{tag}</Tag>
                <p>{location}</p>
            </CardUser>
            <ul>
                <li>Followers <span>{stats.followers}</span> </li>
                <li>Views <span>{stats.views}</span></li>
                <li>Likes <span>{stats.likes}</span></li>              
            </ul>
        </User>    

    );
}

// Типізація для компонента
Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
