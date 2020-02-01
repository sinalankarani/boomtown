import { createStyles } from "@material-ui/core";

const styles = theme => {
  return {
    itemCard: {
      width: 500
    },
    media: {
      height: 280
    },
    card: {
      width: 300,
      height: 350
    },
    cardContent: {
      background: theme.palette.primary.main
    }
  };
};

export default styles;
