import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import styles from "./styles";

const Share = ({ classes, tags }) => {
  return (
    <Grid container className={classes.shareContainer}>
      <ShareItemPreview />
      <ShareItemForm tags={tags} />
    </Grid>
  );
};

export default withStyles(styles)(Share);
