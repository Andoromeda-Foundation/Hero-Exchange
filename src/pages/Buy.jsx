import React, { Component } from "react";
import { getAds } from "../ad";
import HeroesList from "../hero.json";

export default class BuyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ads: []
        }
    }
    async componentWillMount() {
        const rawAds = await getAds({})
        const ads = rawAds.map((rawAds) => {
            const { heroId, cardId } = rawAds
            const { name, nickname } = HeroesList[heroId]
            const heroName = `${name} · ${nickname}`
            const buyLink = `https://nas.cryptohero.pro/#/item/${cardId}/${heroId}`
            return Object.assign(rawAds, { heroName, buyLink })
        })
        this.setState({ ads })
    }

    render() {
        const { ads } = this.state
        return (<div className="selling">
            <h1 className="title medium"> 买卡市集 </h1>
            <table className="table" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th><abbr title="卡牌编号"> 卡号 </abbr></th>
                        <th>英雄</th>
                        <th><abbr title="价格">价格</abbr></th>
                        <th><abbr title="买家">买家</abbr></th>
                        <th><abbr title="Buy">购买</abbr></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th><abbr title="卡牌编号"> 卡号 </abbr></th>
                        <th>英雄</th>
                        <th><abbr title="价格">价格</abbr></th>
                        <th><abbr title="买家">卖家</abbr></th>
                        <th><abbr title="Buy">购买</abbr></th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        ads.map(ad => <tr>
                            <th>{ad.cardId}</th>
                            <td>{ad.heroName}</td>
                            <td>{ad.price}</td>
                            <td>{ad.seller}</td>
                            <td> <a href={ad.buyLink} target="_blank" className="button is-primary"> 立即购买 </a> </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>)
    }
}