import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from ".././ItemCard";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <div className={classes.itemPreviewContainer}>
          <ItemCard item={state.item} />
        </div>
      )}
    </ItemPreviewContext.Consumer>
  );
};

export default withStyles(styles)(ShareItemPreview);
