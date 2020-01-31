import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

// import { ViewerContext } from "../../context/ViewerProvider";

const ItemCard = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="" title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h1>{title}</h1>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>{description}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
