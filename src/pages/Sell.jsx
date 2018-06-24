import React, { Component } from "react";
import HeroesList from "../hero.json";
export default class SellPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardId: -1,
            heroId: -1,
            profile: {}
        }
    }
    async componentWillMount() {

    }

    setTokenProfile(e) {
        const url = e.target.value
        const [cardId, heroId] = url
            .replace("https://nas.cryptohero.pro/#/item/", "")
            .split("/")
            .map(number => Number(number))
        const profile = HeroesList[heroId]
        this.setState({ cardId, heroId, profile })
    }

    render() {
        const { cardId, heroId } = this.state
        const { name, nickname } = this.state.profile
        return (<div className="selling">
            <h1 class="title medium"> 发布卖卡广告 </h1>
            <div className="field" style={{ textAlign: "left" }}>
                <label className="label">请把要卖的卡牌地址填写到这儿</label>
                <div className="control">
                    <input className="input" onChange={e => this.setTokenProfile(e)} type="text" placeholder="地址长得像 https://nas.cryptohero.pro/#/item/12193/50" />
                </div>
            </div>
            { cardId !== -1 ? 
                <div className="ready-to-sell">
                <p> 卡牌 ID {cardId}  英雄 ID {heroId} </p>
                <p>  {name} · {nickname} </p>
                </div>
            :
            <div></div>
            }
            <button className="button is-primary is-large" disabled={cardId === -1}> 发布广告 </button>

            
        </div>)
    }
}