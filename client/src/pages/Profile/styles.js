const styles = theme => ({
  profileContainer: {
    paddingTop: 100,
    padding: 50,
    backgroundColor: theme.palette.secondary.main
  },
  profileInfo: {
    backgroundColor: theme.palette.white.main,
    minWidth: "80%",
    height: 200,
    borderRadius: 5,
    padding: 30
  },
  itemDetails: {
    display: "flex",
    flexDirection: "row"
  },
  sharedItemsTitle: {
    color: theme.palette.primary.main,
    textAlign: "center"
  },
  username: {
    color: "grey"
  },
  bold: {
    fontWeight: "bold",
    paddingRight: 5
  },
  bioItems: {
    display: "flex",
    justifyContent: "flex-start"
  }
});

export default styles;
