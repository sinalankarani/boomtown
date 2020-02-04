import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import styles from "./styles";

const ShareItemPreview = ({ classes }) => {
  return (
    <div className={classes.itemPreviewContainer}>
      <Box style={{ height: 500, width: 500, backgroundColor: "lightblue" }} />
    </div>
  );
};

export default withStyles(styles)(ShareItemPreview);
