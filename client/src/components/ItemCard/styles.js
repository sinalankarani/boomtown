const styles = theme => {
  return {
    card: {
      height: 520,
      width: 350
    },
    media: {
      backgroundImage: `url(https://images.unsplash.com/photo-1560849807-bae5314c9e98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80)`,
      height: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    content: {
      backgroundColor: theme.palette.white.main,
      color: "black",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    },
    itemPostBox: {
      display: "flex"
    },
    itemPostInfo: {
      display: "flex",
      flexDirection: "column"
    },
    gravatar: {
      marginRight: 20,
      borderRadius: 50
    },
    itemDescription: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "35%"
    },
    borrowBtn: {
      border: "1px solid lightgrey",
      height: 40,
      width: 120,
      borderRadius: 5
    }
  };
};

export default styles;
