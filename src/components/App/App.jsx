import { Profile } from "../profile/Profile";
import { Container } from './App.styled'
import user from '../data/user.json';
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return (

    <Container>
      <GlobalStyle/>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
    </Container>

  );
};


