import React, { Component } from "react";
import { withStyles, TextField, Typography, Button } from "@material-ui/core/";
import { Form, Field, FormSpy } from "react-final-form";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import PropTypes from "prop-types";
import styles from "./styles";

class ShareItemForm extends Component {
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.title = t.title + "  ";
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
                    throw new Error(
                      `An error occured with your item details  + ${e}`
                    );
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
                      <Typography gutterBottom variant="h4">
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
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Tools"
                          />
                          Tools
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Electronics"
                          />
                          Electronics
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Musical Instruments"
                          />
                          Musical Instruments
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Clothing"
                          />
                          Clothing
                        </label>
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          disabled={pristine}
                          to={{
                            pathname: "/profile"
                          }}
                        >
                          Submit
                        </Button>
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

ShareItemForm.propTypes = {
  tags: PropTypes.array.isRequired,

  tags: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(ShareItemForm);
