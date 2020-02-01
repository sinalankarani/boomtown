import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography color="inherit">Boomtown</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
