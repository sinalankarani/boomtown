import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  withStyles
} from "@material-ui/core/";
import logo from "../../images/boomtown.svg";
import { Add, MoreVert } from "@material-ui/icons/";
import styles from "./styles";

const NavBar = ({ classes }) => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.navBar}>
          <Link href="/home">
            <img src={logo} className={classes.logo} />
          </Link>
          <div>
            <Button
              size="large"
              color="secondary"
              className={classes.navButton}
            >
              <Add className={classes.addIcon} />
              Share Something
            </Button>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
