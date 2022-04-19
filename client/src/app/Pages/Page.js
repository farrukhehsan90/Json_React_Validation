import React, { useState, useEffect } from "react";
import Form from "@rjsf/core";
import { schema } from "../../Config/schema";
import { getData, postData,deleteData } from "../../Config/Services";
import Records from "../widgets/Records";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import SelectWidget from "../widgets/SelectWidget";
import InputWidget from "../widgets/InputWidget";
export default function Page() {
  const [items, setItems] = useState([]);

  const handleSubmit = async data => {
    let body = { ...data, id: uuidv4() };
    const res = await postData(body);
    if (!res.error) {
      alert(res.message);
    }
    handelRefresh();
  };

  useEffect(() => {
    handelRefresh();
  }, []);

  const handleDelete=async(id)=>{
    const res=await deleteData(id);
    if(res){
      alert(res.message)
    }
    handelRefresh()
  }

  const handelRefresh = async () => {
    const res = await getData();
    if (res) {
      setItems(res);
    }
  };

  const widgets={
    SelectWidget:SelectWidget,
    TextWidget:InputWidget
  }

  return (
    <div>
      <div className="container">
        <Form
          schema={schema}
          widgets={widgets}
          onSubmit={event => {
            handleSubmit(event.formData);
          }}
        />
      </div>

      <div className="devider" />
      <div className="showrec_container">
        <h1 className="title">All Records</h1>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={() => {
            handelRefresh();
          }}
        >
          Refresh
        </button>
      </div>
      
      {items.length > 0
        ? <>
        <Records header/>
        {
          items.map((item, i) => {
            return (
              <Records
                Food={item.Food}
                key={i}
                foodType={item.foodType}
                foodQuantity={item.foodQuantity}
                Utencils={item.Utencils}
                toysQuantity={item.toysQuantity}
                utencilsQuantity={item.utencilsQuantity}
                Toys={item.Toys}
                deleteItem={()=>{handleDelete(item.id)}}
              />
            );
          })
        }
        </>
        : <h1>No Record Found</h1>}
    </div>
  );
}
