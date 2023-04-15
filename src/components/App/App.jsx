import { GlobalStyle } from "./GlobalStyle";
import { Container } from './App.styled'

import { Profile } from "../profile/Profile";
import user from '../data/user.json';

import { Statistics } from "components/statistics/Statistics";
import data from '../data/data.json';

import { FriendList } from "components/friends/Friendlist";
import friends from '../data/friends.json';

import { Transactions } from "../transactions/Transactions";
import transactions from '../data/transactions.json';


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
        title={data.title}
        stats={data}
      />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
      
    </Container>

  );
};

  // <Statistics 
  //       title="Upload stats"
  //       stats={data}
  //     />


