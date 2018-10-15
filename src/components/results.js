import React from 'react';
import {connect} from 'react-redux';
import {getSearchHits} from '../actions/recipes.js';
import {showHideInfo} from '../actions/recipes.js';
import ListResult from './list-result.js';

export class ResultsList extends React.Component {


  componentDidMount() {
    this.props.dispatch(getSearchHits())
  }

  render() {

    console.log(this.props)
    const listOfRecipes = this.props.hits.map((hit, index) => {
      console.log(hit)
      return <ListResult key={index} {...hit}/>
    })

    return (
      <div className="search-results">
        <ul>{listOfRecipes}</ul>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  hits: state.hits,
  isHidden: state.isHidden
});

export default connect(mapStateToProps)(ResultsList);
