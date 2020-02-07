import React from "react";
import {
  Card,
  // CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Gravatar from "react-gravatar";
import styles from "./styles";
// import { ViewerContext } from "../../context/ViewerProvider";

const ItemCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <NavLink to={`profile/${item.itemowner.id}`}>
        <CardMedia
          className={classes.media}
          style={{ backgroundImage: item && item.imageurl }}
        >
          <CardContent className={classes.content}>
            <div className={classes.itemDescription}>
              <Typography gutterBottom variant="h5" component="h2">
                {item && item.title}
              </Typography>
              <Typography gutterBottom variant="body1" component="h2">
                {item && item.description}
              </Typography>
              <Typography gutterBottom variant="body2" component="h2">
                {item && item.tags.map(tag => tag.title)}
              </Typography>
              <Typography variant="body1" component="h2">
                {moment()
                  .startOf("day")
                  .fromNow()}
              </Typography>
            </div>
            <Gravatar
              className={classes.gravatar}
              email={item && item.itemowner && item.itemowner.email}
              size={50}
              rating="pg"
              default="monsterid"
              style={{ borderRadius: 50, marginRight: 20 }}
            />
            <CardActions color="primary">
              <Button className={classes.borrowBtn} size="medium">
                Borrow
              </Button>
            </CardActions>
          </CardContent>
        </CardMedia>
      </NavLink>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
