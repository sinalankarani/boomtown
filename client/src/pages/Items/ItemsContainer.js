import React, { Component } from "react";
import Items from "./Items";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
// import NavBar from "../../components/NavBar";
// import FullScreenLoader from "../../components/FullScreenLoader";
// import { ViewerContext } from "../../context/ViewerProvider";

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          // if (loading) return <FullScreenLoader/>;
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;
          return <Items items={data.items} />;
        }}
      </Query>
    );
  }
}

export default ItemsContainer;
