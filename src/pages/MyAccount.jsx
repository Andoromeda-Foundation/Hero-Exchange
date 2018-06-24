import React , { Component } from "react";
import NasId from "../contract/nasid";
import CardList from "../components/cardList";
import { getAds } from "../ad";
import { getMe } from "../utils";

export default class MyToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: {
                address: "",
                profile: {}
            },
            mySellingCards: []
        }
    }

    async componentWillMount() {
        const address = await getMe()
        const nasIdContract = new NasId()
        const profile = await nasIdContract.fetchAccountDetail(address)
        const account = {address, profile}
        this.setState({account})
        const mySellingCards = await getAds({targetSeller: address})
        this.setState({mySellingCards})
    }

    render() {
        const {state} = this
        const {address, profile} = state.account
        if (address === "") {
            return (
                <div className="my-token">
                    <h1 className="title"> 我的卡牌销售 </h1>
                    <p className="subtitle"> 正在全力加载中 </p> 
                </div>
            )
        } else {
            const {mySellingCards} = this.state
            return (
                <div className="my-token">
                    <h1 className="title"> 我的账户 </h1>
                    <div className="my-profile">
                        <a href="http://nasid.pro/#/my">
                        <img src={profile.avatar} alt="修改头像去 NasId"/>
                        </a>
                        <p className="subtitle"> 钱包地址: {address} </p>
                    </div>
                    <h1 className="title"> 我当前在售卡牌 </h1>
                    <CardList heros={
                        mySellingCards
                        .map(card => {
                            const front = `http://test.cdn.hackx.org/heros_new/${card.heroId}.jpeg`
                            return Object.assign(card, {front})
                        })
                    } />
                </div>
            )
        }
        
    }
}