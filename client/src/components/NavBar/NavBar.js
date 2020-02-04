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
import { withRouter } from "react-router-dom";
import styles from "./styles";

const options = ["Profile", "Sign"];

const NavBar = ({ classes, location }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(location);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.navBar}>
          <Link href="/home">
            <img src={logo} className={classes.logo} />
          </Link>
          <div>
            {location.pathname !== "/share" ? (
              <Button
                size="large"
                color="secondary"
                className={classes.navButton}
              >
                <Add className={classes.addIcon} />
                Share Something
              </Button>
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
              {options.map(option => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(withStyles(styles)(NavBar));
