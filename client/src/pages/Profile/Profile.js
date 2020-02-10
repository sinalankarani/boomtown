import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";
import ItemsGrid from "../../components/ItemsGrid";
import { Typography } from "@material-ui/core";

const Profile = ({ userData, classes }) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileInfo}>
        <Gravatar
          email={userData.email}
          className={classes.gravatar}
          size={50}
          default="monsterid"
          style={{ borderRadius: 50, marginRight: 20 }}
        />
        <Typography variant="h5" className={classes.username}>
          {userData.fullname}
        </Typography>

        <div className={classes.userData}>
          <div className={classes.itemDetails}>
            <div className={classes.bold}>{userData.items.length}</div>Items
            shared
          </div>
          <div className={classes.itemDetails}>
            <div className={classes.bold}>{userData.borrowed.length}</div>
            Items borrowed
          </div>
          <div className={classes.itemDetails}>
            <div className={classes.bold}>Bio:</div>
            {userData.bio ? userData.bio : "No bio provided"}
          </div>
        </div>
      </div>
      <h1 className={classes.sharedItemsTitle}>Shared Items</h1>
      <ItemsGrid items={userData.items} className={classes.bioItems} />
    </div>
  );
};

export default withStyles(styles)(Profile);
