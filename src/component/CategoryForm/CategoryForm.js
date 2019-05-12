import React from 'react';



export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  handleChange =(event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onComplete(this.state);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='title'
        />
        <input
          type='number'
          name='budget'
          value={this.state.budget}
          onChange={this.handleChange}
          placeholder='0'
        />
        <button type='submit'> New Category </button>
      </form>
    );
  }
}