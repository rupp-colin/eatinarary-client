import React from 'react';
import {Field, FieldArray, reduxForm, focus} from 'redux-form';
import Input from './input.js';
import {required, nonEmpty} from'../validators.js';
import {addOriginalRecipe} from '../actions/recipe-book.js';
import './orig-recipe-form.css';

  const renderField = ({input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  )

  const renderIngredients = ({fields, meta: {error} }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>Add Ingredient</button>
      </li>
      {fields.map((ingredient, index) =>
        <li key={index}>
        <Field
          name={ingredient}
          type="text"
          component={renderField}
          label={`Ingredient #${index + 1}`}/>
        <button
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}
          >Delete
        </button>
      </li>
      )}
      {error && <li className="error">{error}</li>}
    </ul>
    )

export class OriginalRecipeForm extends React.Component {

  onSubmit(values) {
    const {
      label,
      ingredientLines,
      instructions,
      source,
      url,
      image
    } = values;
    const newItem = {
      label,
      ingredientLines,
      instructions,
      source,
      url,
      image
    }
    console.log(newItem)
    return this.props
      .dispatch(addOriginalRecipe(newItem))
  }



  render() {

    return (
      <form
        className="original-recipe-form row"
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}>
        <div className="col-12">
        <label className="form-label" htmlFor="label">Title</label>
        <Field
          component={Input}
          type="text"
          name="label"
          validate={[required, nonEmpty]}
        />
      </div>
        <div className="col-12">
        <label className="form-label" htmlFor="ingredientLines">Ingredients</label>
        <FieldArray
          component={renderIngredients}
          type="text"
          name="ingredientLines"
          validate={[]}
        />
      </div>
        <div className="col-12">
        <label className="form-label" htmlFor="instructions">Instructions</label>
        <Field
          component={Input}
          type="text"
          name="instructions"
          validate={[required, nonEmpty]}
        />
      </div>
        <div className="col-12">
        <label className="form-label" htmlFor="source">Source</label>
        <Field
          component={Input}
          type="text"
          name="source"
          validate={[]}
        />
      </div>
        <div className="col-6">
        <label className="form-label" htmlFor="url">Original Url</label>
        <Field
          component={Input}
          type="text"
          name="url"
          validate={[]}
        />
      </div>
        <div className="col-6">
        <label className="form-label" htmlFor="image">Link to an Image</label>
        <Field
          component={Input}
          type="text"
          name="image"
          validate={[]}
        />
      </div>
        <button
          className="recipe-button col-3"
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
