import React , { Component } from "react";
import NasId from "../contract/nasid";
import CardList from "../components/cardList";
import { getMe } from "../utils";

export default class MyToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: {
                address: "",
                profile: {}
            }
        }
    }

    async componentWillMount() {
        const address = await getMe()
        const nasIdContract = new NasId()
        const profile = await nasIdContract.fetchAccountDetail(address)
        const account = {address, profile}
        this.setState({account})

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
            return (
                <div className="my-token">
                    <h1 className="title"> 我的账户 </h1>
                    <div className="my-profile">
                        <img src={profile.avatar} alt=""/>
                        <p className="subtitle"> 钱包地址: {address} </p>
                    </div>
                    <h1 className="title"> 我当前在售卡牌 </h1>
                    <CardList heros={
                        [0,1,2,3,4,5,6,7,8,9]
                        .map(id => ({front: `http://test.cdn.hackx.org/heros_new/${id}.jpeg` , id}))
                    } />
                </div>
            )
        }
        
    }
}