import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ItemsGrid from "../../components/ItemsGrid";
import { Container } from "@material-ui/core";
import styles from "./styles";

const Items = ({ items, classes }) => {
  return (
    <Container>
      <ItemsGrid items={items} />
    </Container>
  );
};

export default withStyles(styles)(Items);
