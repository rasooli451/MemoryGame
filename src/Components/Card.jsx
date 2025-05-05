
import { useState } from "react";

export default function Card({card, clicked}){
    function handleInput(){
        clicked(card.clicked , card.key);
    }
    return <div className="card" onClick={handleInput}>
        <img src={card.sprite} alt={card.name}/>
        <p className="name">{card.name}</p>
    </div>

}