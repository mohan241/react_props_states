import "./Expenceitem.css"
import React, { useState} from 'react';

function Expenceitem(props){

    let month=props.date.toLocaleString('en-US',{month:'long'});
    let day=props.date.toLocaleString('en-US',{day:'2-digit'});
    let year=props.date.getFullYear();

    let [title,setTitle]=useState(props.title);

    const clickHandle=()=>{
        let newtitle=window.prompt("enter new title");
        setTitle(newtitle);
    }

return (
    <div className="expense-item">
        <div className="date">{day}-{month}-{year} </div>
        <h2>{title}</h2>
        <div className="expense-item_description">
            <div className="expense-item_price">रु {props.amount}</div>
        </div>
        <button onClick={ clickHandle } className="btn btn-info ms-3">change title</button>
    </div>
);
}

export default Expenceitem;