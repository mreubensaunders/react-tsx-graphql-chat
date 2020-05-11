import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { Client, Provider, defaultExchanges, subscriptionExchange } from 'urql';

const subscriptionClient = new SubscriptionClient(
  'ws://graphql-chat-backend.herokuapp.com/',
  {}
);

const client = new Client({
  url: 'https://graphql-chat-backend.herokuapp.com/',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});

ReactDOM.render(
  <Provider value={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
