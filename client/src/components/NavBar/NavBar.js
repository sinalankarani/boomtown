import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  withStyles
} from "@material-ui/core/";
import logo from "../../images/boomtown.svg";
import { Add, MoreVert } from "@material-ui/icons/";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { withRouter, Link } from "react-router-dom";
import { compose, graphql } from "react-apollo";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import styles from "./styles";

const NavBar = ({ classes, location, signOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.navBar}>
          <Link to="/home">
            <img alt={logo} src={logo} className={classes.logo} />
          </Link>
          <div>
            {location.pathname !== "/share" ? (
              <Link to="/share">
                <Button
                  size="large"
                  color="secondary"
                  className={classes.navButton}
                >
                  <Add className={classes.addIcon} />
                  Share Something
                </Button>
              </Link>
            ) : null}
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: 200
                }
              }}
            >
              <Link to="/profile">
                <MenuItem onClick={handleClose}>
                  <FingerprintIcon />
                  Your Profile
                </MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  handleClose();
                  try {
                    signOut();
                  } catch (e) {}
                }}
              >
                <PowerSettingsNewIcon />
                Sign Out
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const refetchQueries = [{ query: VIEWER_QUERY }];

export default compose(
  graphql(LOGOUT_MUTATION, {
    options: { refetchQueries },
    name: "signOut"
  })
)(withRouter(withStyles(styles)(NavBar)));
