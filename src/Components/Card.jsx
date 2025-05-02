
import { useState } from "react";

export default function Card({card, clicked}){
    let disected = card == 0 ? 0 : card.split(",");
    return <div className="card">
        <img src={disected[0]} alt={disected[1]}/>
        <p className="name">{disected[1]}</p>
    </div>

}