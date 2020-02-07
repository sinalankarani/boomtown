import React, { Component } from "react";
import Profile from "./Profile";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { withRouter } from "react-router";
import { ViewerContext } from "../../context/ViewerProvider";
import FullScreenLoader from "../../components/FullScreenLoader";

class ProfileContainer extends Component {
  render() {
    const { match } = this.props;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{
              id: match.params.id || viewer.id
            }}
          >
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `Error: ${error}`;
              if (data) return <Profile userData={data.user} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default withRouter(ProfileContainer);
