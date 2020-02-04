import React, { Component } from "react";
import {
  withStyles,
  Checkbox,
  TextField,
  Typography
} from "@material-ui/core/";
import styles from "./styles";
import { Form, Field } from "react-final-form";

// const [state, setState] = React.useState({
//   checkedA: true,
//   checkedB: true,
//   checkedF: true,
//   checkedG: true
// });

// const handleChange = name => event => {
//   setState({ ...state, [name]: event.target.checked });
// };

class ShareItemForm extends Component {
  onSubmit = values => {};
  validate = values => {
    const errors = {};
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;
    const { tags } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.formContainer}>
              <Typography gutterBottom variant="h3">
                Share. Borrow. Prosper.
              </Typography>
              <Field
                name="item name"
                type="text"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField {...input} placeholder="Name your item." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />
              <Field
                gutterBottom
                name="item description"
                type="text"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField {...input} placeholder="Describe your item." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />
              <Typography variant="h6">Add Your Tags:</Typography>
              <div className={classes.tagsCheckbox}>
                {tags.map(tag => {
                  return (
                    <label key={tag.id}>
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange("checkedB")}
                        value={tag.title}
                        color="primary"
                      />
                      {tag.title}
                    </label>
                  );
                })}
              </div>
            </form>
          );
        }}
      ></Form>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
