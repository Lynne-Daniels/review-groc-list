import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (

  <div className="groceries">
{/*create mapping function and return individual grocery item*/}
    { props.list.map(item => <GroceryItem item={item} key={item.id}/>)}
  </div>
)

export default GroceryList;