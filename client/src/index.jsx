import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  addGroceryItem (quantity, description) {
    console.log('adding grocery item...', quantity, description);
    var tempList = this.state.list.slice();

    tempList.push({id: tempList.length+1, quantity: quantity, description: description});
    console.log(tempList);
    this.setState({
      list: tempList
    });

  }

  render () {
    return (<div>
      <h1>Grocery List</h1>
      <AddGrocery onAdd={this.addGroceryItem.bind(this)}/>
      <GroceryList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));