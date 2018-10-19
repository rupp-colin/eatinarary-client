import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input.js';
import {required, nonEmpty} from'../validators.js';
import {addOriginalRecipe} from '../actions/recipe-book.js';

export class OriginalRecipeForm extends React.Component {

  onSubmit(values) {
    const {
      label,
      //healthLabels,
      //ingredientLines,
      instructions,
      source,
      url,
      image
    } = values;
    const newItem = {
      label,
      //healthLabels,
      //ingredientLines,
      instructions,
      source,
      url,
      image
    }
    return this.props
      .dispatch(addOriginalRecipe(newItem))
  }

  render() {
    return (
      <form
        className="original-recipe-form"
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}>
        <label htmlFor="label">Title</label>
        <Field
          component={Input}
          type="text"
          name="label"
          validate={[required, nonEmpty]}
        />
        {/*}<label htmlFor="healthLabels">Health Labels</label>
        <Field
          component={Input}
          type=
          name="healthLabels"
          validate={[]}
        />
        <label htmlFor="ingredientLines">Ingredients</label>
        <Field
          component={Input}
          type=
          name="ingredientLines"
          validate={[]}
        />*/}
        <label htmlFor="instructions">Instructions</label>
        <Field
          component={Input}
          type="text"
          name="instructions"
          validate={[]}
        />
        <label htmlFor="source">Source</label>
        <Field
          component={Input}
          type="text"
          name="source"
          validate={[]}
        />
        <label htmlFor="url">Original Url</label>
        <Field
          component={Input}
          type="text"
          name="url"
          validate={[]}
        />
        <label htmlFor="image">Link to an Image</label>
        <Field
          component={Input}
          type="text"
          name="image"
          validate={[]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addOriginalRecipe',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('addOriginalRecipe', Object.keys(errors)[0]))
  }
})(OriginalRecipeForm)
