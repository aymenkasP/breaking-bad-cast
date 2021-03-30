import React from 'react'
import '../css/style.css'
function Character({item}) {
    console.log(item);
   
    return (
        <div className="card">
           <h2>{item.name}</h2>
           <img src ={item.img} alt = {item.name} />   
        </div>
    )
}

export default Character
