import React from "react";
import "./style.css";

export default function records({
  Food = "Food",
  foodType = "Food Type",
  Toys = "Toys",
  Utencils = "Utencils",
  foodQuantity = "Food Quantity Kgs",
  toysQuantity="Toys Qty in Pcs",
  utencilsQuantity='Utencils Qty in Pcs',
  header=false,
  deleteItem
}) {
  return (
    <div className="tab_cont">
      <h1 className={header?"header":"val"}>
        {Food}
      </h1>
      <h1 className={header?"header":"val"}>
        {foodType}
      </h1>
      <h1 className={header?"header":"val"}>
        {Toys}
      </h1>
      <h1 className={header?"header":"val"}>
        {Utencils}
      </h1>
      <h1 className={header?"header":"val"}>
        {foodQuantity}
      </h1>
      <h1 className={header?"header":"val"}>
        {utencilsQuantity}
      </h1>
      <h1 className={header?"header":"val"}>
        {toysQuantity}
      </h1>
      
      {
        header?<></>:<h5 className="dlt-btn" onClick={()=>deleteItem()} >delete</h5>
      }
    </div>
  );
}
