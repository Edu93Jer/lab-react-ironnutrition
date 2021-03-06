import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './Components/FoodBox'
import AddFood from './Components/AddFood'
import SearchBar from './Components/Search'
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foods,
    listFood: foods,
    boton: false
  }

  addFood = (food) => {
    const withNewFood = [...this.state.foods, food];
    this.setState( { foods: withNewFood } )
  }

  searchBar = ( e ) => {
    if(e.target.value){
      const busqFood = [...this.state.foods].filter(food =>
        food.name.toUpperCase().includes(e.target.value.toUpperCase()))
        this.setState({foods:busqFood})
    } else {
      this.setState({foods: this.state.listFood})
    }
  }

  render() {
    return (
      <div className="App">

      <SearchBar searchFood={this.searchBar}/>
      <button onClick={() => this.setState({boton: !this.state.boton})}>
      Add a New Food
      </button>
      {this.state.boton && <AddFood addFood={ this.addFood } />}
      <FoodBox foods={ this.state.foods } />
      </div>
    );
  }
}

export default App;
