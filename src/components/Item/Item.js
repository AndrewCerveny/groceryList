import React from "react";
import './Item.css';


const Item = ({id,amount,name, deleteItem}) => {
  return(
   <section className="single-item">
    <div className="item-layout">
      <h2 className="label"> Item </h2>
      <h2 className="substance"> {name}</h2>
      <h2 className="label">Quantity </h2>
      <h2  className="substance">{amount}</h2>
    </div>
    <div className="button-box">
      <h2 className="confirm"> Purchased</h2>
      <button className="purchase-btn" onClick={()=>{deleteItem(id)}}>🛒</button>
    </div>
   </section>
  )

}
export default Item; 