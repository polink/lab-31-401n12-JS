import React from 'react';
import { connect } from 'react-redux';
import { createCategory } from './action/category-actions';

import CategoryForm from './component/CategoryForm/CategoryForm';

class App extends React.Component {
  render() {
    return(
      <div>
        <CategoryForm onComplete={this.props.mappedCategoryCreate}/>
        {this.props.category.map(current => <p>{current.title} {current.budget}</p>)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // Vinicio - anything I return here WILL become props
  return {
    category: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Vinicio - anything I return here WILL become props
  return {
    mappedCategoryCreate: (category) => {
      dispatch(createCategory(category.title, category.budget));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

