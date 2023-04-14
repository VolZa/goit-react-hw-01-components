import { GlobalStyle } from "./GlobalStyle";
import { Container } from './App.styled'

import { Profile } from "../profile/Profile";
import user from '../data/user.json';

import { Statistics } from "components/statistics/Statistics";
import  data  from '../data/data.json';

export  const App = () => {
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
      <Statistics 
        title="Upload stats"
        stats={data}
      />
      
    </Container>

  );
};

  // <Statistics 
  //       title="Upload stats"
  //       stats={data}
  //     />


