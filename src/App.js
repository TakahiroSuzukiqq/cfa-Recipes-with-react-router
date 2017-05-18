import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import PropTypes from 'prop-types';

class App extends Component {
　constructor(props){
  super(props);
  this.state = {
    ingredients: []
  }
};

   componentDidMount() {
     this.getIngredientList();
};

  getIngredientList() {
    console.log('componentDidMount()');
    const URL = 'https://cfa-demo.herokuapp.com/ingredients/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk1MDkxMjc1fQ.cnb29p4p6WegB-EjIRvrpZ4kA5uOOuoTpmMQdqtNWwk';
    axios.get(URL)
    .then((response) => {
      this.setState({ ingredients: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    // console.log('render()');
    return (
      <div>
      <h1>Recipes Fronted</h1>
      <IngredientForm
        getIngredientList={ () => this.getIngredientList() }/>
      {this.state.ingredients.length < 1 ? <p>Loading...</p> :
        <IngredientList ingredients={this.state.ingredients}
      />}
      </div>
    );
  }
}

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default App;
