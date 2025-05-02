

import Card from "./Card"

export default function Cards({cards, clicked}){



    return <div className="Cards">
        {cards.map((card) => <Card card={card} clicked={clicked}/>)}
    </div>
}