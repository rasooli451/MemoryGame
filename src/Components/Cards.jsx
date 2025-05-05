

import Card from "./Card"

export default function Cards({cards, clicked}){
    function Passup(alreadyclicked, key){
        clicked(alreadyclicked, key);
    }
    return <div className="Cards">
        {cards.map((card) => <Card card={card} clicked={(alreadyClicked, id) => Passup(alreadyClicked, id)}  key= {card.key} />)}
    </div>
}