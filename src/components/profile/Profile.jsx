import PropTypes from 'prop-types';
import { Avatar } from './Avatar.styled';
import { CardUser } from './CardUser.styled';
import { Location } from './Location.styled';
import { StatisticsValue } from './StatisticsValue.styled';
import { Tag } from './Tag.styled';
import { Title } from './Title.styled';
import { User } from './User.styled';
import { UserStatistics } from './UserStatistics.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <User >   
            <CardUser>
                <Avatar src={avatar} alt={username} />
                <Title>{username}</Title>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </CardUser>
            <UserStatistics>
                <li>Followers <StatisticsValue>{stats.followers}</StatisticsValue> </li>
                <li>Views <StatisticsValue>{stats.views}</StatisticsValue></li>
                <li>Likes <StatisticsValue>{stats.likes}</StatisticsValue></li>              
            </UserStatistics>
        </User>    

    );
}

// Типізація для компонента
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
