import React from 'react';
import { useSubscription } from 'urql';

const onlineUsers = `
  subscription OnlineUsersSubscription {
    onlineUsers {
      id
      name
      hex
    }
  }
`;


const handleUserSubscription = (users = [], response) => {
  return [response.onlineUsers, ...users];
};

const Users = () => {
  
  const [userRes] = useSubscription({ query: onlineUsers }, handleUserSubscription);

  if (!userRes.data) {
    return <p className="rs-text sm"></p>;
  }
  return (
    <ul>

      {userRes.data.map(user => (
        
        <p className="rs-text sm" style={{color: user.hex}} key={user.id}>
          {/* {message.from}:  */}
          {user.name} joined
        </p>
        
      ))}
    </ul>
  );
};

export default Users;