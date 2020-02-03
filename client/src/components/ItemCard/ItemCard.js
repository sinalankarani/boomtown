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
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Gravatar from "react-gravatar";
import styles from "./styles";
// import { ViewerContext } from "../../context/ViewerProvider";

const ItemCard = ({ classes, title, description, tags, itemowner }) => {
  return (
    <Card className={classes.card}>
      {/* <CardActionArea > */}
      <CardMedia className={classes.media}>
        <CardContent className={classes.content}>
          <div className={classes.itemDescription}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="body1" component="h2">
              {description}
            </Typography>
            <Typography gutterBottom variant="body2" component="h2">
              {tags.map(tag => tag.title)}
            </Typography>
            <Typography variant="body1" component="h2">
              {moment()
                .startOf("day")
                .fromNow()}
            </Typography>
          </div>
          <Gravatar
            className={classes.gravatar}
            email={itemowner.email}
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
      {/* </CardActionArea> */}
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
