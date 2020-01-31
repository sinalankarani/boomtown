import React from "react";
import ItemCard from "../../components/ItemCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

// import { ViewerContext } from "../../context/ViewerProvider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const ItemsGrid = ({ items }) => {
  const classes = useStyles();

  {
    return items.map(item => (
      <Grid key={item.id} item xs={12} container justify="center" spacing={5}>
        <ItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          // className={classes.paper}
        />
      </Grid>
    ));
  }
};

export default ItemsGrid;
