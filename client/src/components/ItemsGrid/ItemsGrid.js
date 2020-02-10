import React from "react";
import ItemCard from "../../components/ItemCard";
import { Grid, withStyles } from "@material-ui/core";
import styles from "./styles";

const ItemsGrid = ({ items, classes }) => {
  return (
    <Grid container spacing={4} className={classes.itemGrid}>
      {items.map(item => (
        <Grid item key={item.id} xs={12} md={6} lg={4}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
