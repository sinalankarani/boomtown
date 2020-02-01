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
import moment from "moment";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
// import { ViewerContext } from "../../context/ViewerProvider";

const ItemCard = ({ classes, title, description, tags }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.media}>
        <CardMedia image="" title="" />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="h2">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h2">
            {tags.map(tag => tag.title)}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="h2">
            {moment()
              .startOf("day")
              .fromNow()}
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
