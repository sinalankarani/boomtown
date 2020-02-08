import React, { Component } from "react";
import {
  withStyles,
  Checkbox,
  TextField,
  Typography,
  Button
} from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import { Form, Field, FormSpy } from "react-final-form";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import styles from "./styles";

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
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };

  render() {
    const { classes, tags } = this.props;

    return (
      <Mutation mutation={ADD_ITEM_MUTATION}>
        {addItem => (
          <ItemPreviewContext.Consumer>
            {({ updatePreview, resetPreview }) => (
              <Form
                onSubmit={async values => {
                  try {
                    await addItem({
                      variables: {
                        item: {
                          ...values,
                          tags: this.applyTags(values.tags, tags)
                        }
                      }
                    });
                  } catch (e) {
                    throw e;
                  }
                }}
                validate={this.validate}
                render={({ handleSubmit, pristine }) => {
                  return (
                    <form
                      className={classes.formContainer}
                      onSubmit={event => {
                        handleSubmit(event);
                        resetPreview();
                      }}
                    >
                      <FormSpy
                        subscription={{ values: true }}
                        onChange={({ values }) => {
                          if (values) {
                            this.dispatchUpdate(values, tags, updatePreview);
                          }
                          return "";
                        }}
                      />
                      <Typography gutterBottom variant="h3">
                        Share. Borrow. Prosper.
                      </Typography>
                      <Field
                        name="title"
                        type="text"
                        render={({ input, meta }) => (
                          <React.Fragment>
                            <TextField
                              {...input}
                              placeholder="Name your item."
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </React.Fragment>
                        )}
                      />
                      <Field
                        gutterBottom
                        name="description"
                        type="text"
                        render={({ input, meta }) => (
                          <React.Fragment>
                            <TextField
                              {...input}
                              placeholder="Describe your item."
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </React.Fragment>
                        )}
                      />
                      <Field
                        gutterBottom
                        name="imageurl"
                        type="text"
                        render={({ input, meta }) => (
                          <React.Fragment>
                            <TextField {...input} placeholder="Image URL." />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </React.Fragment>
                        )}
                      />
                      <Typography variant="h6">Add Your Tags:</Typography>
                      <div className={classes.tagsCheckbox}>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Household Items"
                          />
                          Household Items
                          <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Tools"
                          />
                          Tools
                          <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Electronics"
                          />
                          Electronics
                          <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Musical Instruments"
                          />
                          Musical Instruments
                          <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Clothing"
                          />
                          Clothing
                          <HomeIcon />
                        </label>
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          disabled={pristine}
                        >
                          Submit
                        </Button>
                        {/* {tags.map(tag => {
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
                })} */}
                      </div>
                    </form>
                  );
                }}
              ></Form>
            )}
          </ItemPreviewContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
