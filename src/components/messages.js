import React from 'react';
import { useSubscription } from 'urql';

const newMessages = `
  subscription MessageSentSubscription {
    messageSent {
      id
      from
      message
    }
  }
`;

const handleMsgSubscription = (messages = [], response) => {
  return [response.messageSent, ...messages];
};

const Messages = ({hex}) => {
  if (hex != undefined){
    console.log('yooo' + hex.id)
  }
  
  const [msgRes] = useSubscription({ query: newMessages }, handleMsgSubscription);
  
  if (!msgRes.data) {
    return <p className="rs-text sm prime">no new messages</p>;
  }
  
  return (
    <ul>
      {msgRes.data.map(message => (
        <div className="bubble">
        <span> 
        <div className="username">{message.from} </div>
        <p className="rs-text md"  key={message.id}>
          {message.message}
        </p>
        </span>
        </div>
      ))}
    </ul>
  );
};

export default Messages;