import { createStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => {
  return {
    card: {
      width: 300,
      height: 450
    },
    media: {
      backgroundImage: `url(https://images.unsplash.com/photo-1560849807-bae5314c9e98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80)`,
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    content: {
      backgroundColor: fade(theme.palette.white.main, 0.8),
      color: "black",
      justifyContent: "flex-end",
      position: "absolute",
      bottom: 0,
      width: "100%"
    },
    itemDescription: {
      display: "flex",
      flexDirection: "column"
    },
    gravatar: {
      position: "absolute",
      top: 20,
      right: 5
    },
    borrowBtn: {
      width: "100%",
      color: theme.palette.secondary.main,
      borderRadius: 5,
      fontWeight: "bold",
      justifyContent: "center"
    }
  };
};

export default styles;
