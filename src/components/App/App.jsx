import { Profile } from "../profile/Profile";
import user from '../data/user.json';
import { Container } from './App.styled'

export const App = () => {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    </Container>
  );
};


