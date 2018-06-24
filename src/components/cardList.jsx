import React from "react";
import { splitEvery } from "ramda";

function CardsList({heros}) {
    return (<div className="cards-list" style={{maxWidth: "100%"}}>
        {splitEvery(3, heros).map(col => <div className="columns">
        {col.map(hero => {
            return (<div className="column" key={hero.id} style={{minWidth: "16rem"}}>
                <img src={hero.front} alt={`Hero #${hero.id}`}  />
            </div>)
        })}
        </div>)}

    </div>)
}

export default CardsList