import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Fade, CircularProgress } from "@material-ui/core";

const FullScreenLoader = ({ classes }) => {
  return (
    <Fade in>
      <Grid className={classes.fullScreenLoaderContainer}>
        <CircularProgress
          size={50}
          thickness={4}
          className={classes.screenLoader}
        />
        <h1 style={{ color: "white" }}>
          “For it is in giving, that we receive.”
        </h1>
      </Grid>
    </Fade>
  );
};

export default withStyles(styles)(FullScreenLoader);
