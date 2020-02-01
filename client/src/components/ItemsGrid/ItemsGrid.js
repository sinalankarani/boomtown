import React from "react";
import ItemCard from "../../components/ItemCard";
import { Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

// import { ViewerContext } from "../../context/ViewerProvider";

const ItemsGrid = ({ items, tags, classes }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        justify="space-evenly"
        spacing={4}
        className={classes.itemGrid}
      >
        {items.map(item => (
          <Grid item key={item.id}>
            <ItemCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
