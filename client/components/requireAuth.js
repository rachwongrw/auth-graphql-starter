// use lowerCase first letter for named filed to signify HOC, as HOC are generally functions and functions are not capitalized

import React, { Component } from "react";
import { graphql } from "react-apollo";
import CurrentUser from "../queries/CurrentUser";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      const { user, loading } = nextProps.data;
      if (!loading && !user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(CurrentUser)(RequireAuth);
};
