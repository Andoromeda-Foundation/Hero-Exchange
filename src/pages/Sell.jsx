import React, { Component } from "react";
import { getMe } from "../utils";
import { sendAd } from "../ad";
import HeroesList from "../hero.json";
import Contract from "../contract/cryptohero";
export default class SellPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: "",
            cardId: -1,
            heroId: -1,
            profile: {},
            price: "",
            tokenOwner: ""
        }
    }

    async componentWillMount() {
        const account = await getMe()
        this.setState({account})
    }

    async setTokenProfile(e) {
        const url = e.target.value
        const [cardId, heroId] = url
            .replace("https://nas.cryptohero.pro/#/item/", "")
            .replace("http://nas.cryptohero.pro/#/item/", "")
            .split("/")
            .map(number => Number(number))
        if (cardId) {
            const profile = HeroesList[heroId]
            this.setState({ cardId, heroId, profile })
            const contract = new Contract()
            const price = await contract.priceOf(cardId)
            const tokenOwner = await contract.ownerOf(cardId)
            this.setState({price, tokenOwner})
        }
    }

    async postAd() {
        const { cardId, heroId, price, account } = this.state
        const payload = {
            cardId,
            heroId,
            price,
            seller: account
        }
        await sendAd(payload)
    }

    render() {
        const { cardId, heroId, price, tokenOwner, account } = this.state
        const { name, nickname } = this.state.profile || {}
        return (<div className="selling">
            <h1 className="title medium"> 发布卖卡广告 </h1>
            <div className="field" style={{ textAlign: "left" }}>
                <label className="label">请把要卖的卡牌地址填写到这儿</label>
                <div className="control">
                    <input className="input" onChange={e => this.setTokenProfile(e)} type="text" placeholder="地址长得像 https://nas.cryptohero.pro/#/item/12193/50" />
                </div>
            </div>
            { name !== undefined ? 
                <div className="ready-to-sell">
                <p> 卡牌 ID {cardId}  英雄 ID {heroId} </p>
                <p>  {name} · {nickname} </p>
                <p> 销售价格： {price ? `${price} NAS` : ""} </p>
                <p> 该币的持有人： {account}</p>
                <p>  修改价格? <a href={`https://nas.cryptohero.pro/#/item/${cardId}/${heroId}`}>回到卡牌页面修改 </a></p>
                </div>
            :
            <div className="not-ready-to-sell"> 等待获取卡牌 ID </div>
            }
            <button className="button is-primary is-large" 
            onClick={() => this.postAd()}
            disabled={price === "" || tokenOwner !== account }> 
            {
                cardId!==-1 && tokenOwner!== account
                ? "你不是该币的所有人，所以不能"
                : ""
            }
            发布广告
            </button>

            
        </div>)
    }
}