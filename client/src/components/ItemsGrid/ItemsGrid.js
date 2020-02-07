import React from "react";
import ItemCard from "../../components/ItemCard";
import { Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

// import { ViewerContext } from "../../context/ViewerProvider";

const ItemsGrid = ({ items, classes }) => {
  return (
    <Grid item>
      <Grid
        container
        justify="space-evenly"
        spacing={4}
        className={classes.itemGrid}
      >
        {items.map(item => (
          <Grid item key={item.id}>
            <ItemCard item={item} xs={12} md={6} lg={4} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
