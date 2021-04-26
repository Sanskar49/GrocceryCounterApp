import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';


class App extends Component{
  state = {
    counters:[
        {id: 1, value: 4},
      
        {id: 2, value: 0},
 
        {id: 3, value: 0},

        {id: 4, value: 0}
    ]
};
handleIncrement = counter  => {
    const counters = [...this.state.counters]; //Cloning the same array using [...]
    const index = counters.indexOf(counter);  //finding out the index of counter which we press
    counters[index] = {...counter}; //Cloning the exact counter to be increamented making it as an object and then
    counters[index].value++;        //incrementing it
    this.setState({counters});
};

handleReset = () =>{
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;

    });
    this.setState({counters});
}


handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId); //display all counters except the one with the arguement 'counterId' which has come from counter component
    this.setState({counters});
    };


  render() {
  return (
    <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length} 
    />
    <main className="container">
      <Counters 
      counters = {this.state.counters}
      onReset = {this.handleReset}
      onIncrement = {this.handleIncrement}   //Properties of the prop object(3 of em).
      onDelete = {this.handleDelete}
      />
    </main>
    </React.Fragment>
    
  );
}
}

export default App;
