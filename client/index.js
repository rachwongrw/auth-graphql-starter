import ApolloClient, { createNetworkInterface } from "apollo-client";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { Router, hashHistory, IndexRoute, Route } from "react-router";
import App from "./components/App";

//networkInterface - in charge of making network reqs to the backend server. making custom one so we can also ask it to send cookies along with reqs
const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin",
  },
});

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  networkInterface,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));

// hashHistory vs BrowserHistory
// hashhistory a lot more flexible. don't have to worry about the correct set up
