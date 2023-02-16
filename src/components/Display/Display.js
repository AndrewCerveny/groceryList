import React from "react";
import './Display.css'
import Item from "../Item/Item";


const Display = ({groceries, deleteItem}) => {
  const allNeededItems = groceries.map(grocery => 
    <Item
      id={grocery.id}
      amount = {grocery.amount}
      name={grocery.name}
      key={grocery.id}
      deleteItem={deleteItem}
    />
  )
  return (
    <section className="item-display">
      {allNeededItems}
    </section>
  )
}
export default Display;


