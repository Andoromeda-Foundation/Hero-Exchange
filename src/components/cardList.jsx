import React from "react";
import { splitEvery } from "ramda";
import HeroesList from "../hero.json";


function CardsList({heros}) {
    return (<div className="cards-list" style={{maxWidth: "100%"}}>
        {splitEvery(3, heros).map(col => <div className="columns">
        {col.map(hero => {
            const heroProfile = HeroesList[hero.heroId]
            return (<div className="column" key={hero.cardId} style={{minWidth: "16rem"}}>
                <img src={hero.front} alt={`Hero #${hero.cardId}`}  />
                <p>{heroProfile.name} · {heroProfile.nickname}</p>
            </div>)
        })}
        </div>)}

    </div>)
}

export default CardsList