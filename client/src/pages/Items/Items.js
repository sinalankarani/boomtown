import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ItemsGrid from "../../components/ItemsGrid";
import styles from "./styles";

const Items = ({ items, classes }) => {
  return <ItemsGrid items={items} />;
};

export default withStyles(styles)(Items);
