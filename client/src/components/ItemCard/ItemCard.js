import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";
import styles from "./styles";

const ItemCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Link to={item && item.itemowner.id && `/profile/${item.itemowner.id}`}>
        <CardMedia
          className={classes.media}
          src={
            item && item.imageurl
              ? item.imageurl
              : "https://images.unsplash.com/photo-1560849807-bae5314c9e98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
          }
          style={{ backgroundImage: item && item.imageurl }}
        ></CardMedia>
      </Link>
      <CardContent className={classes.content}>
        <div className={classes.itemPostBox}>
          <Gravatar
            className={classes.gravatar}
            email={item && item.itemowner && item.itemowner.email}
            size={50}
            default="monsterid"
          />
          <div className={classes.itemPostInfo}>
            <Typography variant="body2">
              {item && item.itemowner.fullname}
            </Typography>
            <Typography variant="body2" color="white">
              {moment()
                .startOf("day")
                .fromNow()}
            </Typography>
          </div>
        </div>
        <div className={classes.itemDescription}>
          <Typography variant="h5">{item && item.title}</Typography>
          <Typography variant="body1">{item && item.description}</Typography>
          <Typography variant="body2">
            {item && item.tags.map(tag => tag.title)}
          </Typography>
        </div>
        <Button className={classes.borrowBtn} size="medium">
          Borrow
        </Button>
      </CardContent>
    </Card>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    itemowner: PropTypes.object,
    tags: PropTypes.array,
    imageurl: PropTypes.string
  })
};

export default withStyles(styles)(ItemCard);
