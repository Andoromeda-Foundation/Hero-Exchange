import React, { Component } from "react";

export default class BuyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async componentWillMount() {

    }

    render() {
        return (<div className="selling">
        <h1 className="title medium"> 买卡市集 </h1>
                <div className="field">
        <label className="label">Name</label>
        <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith"/>
        </div>
        </div>

        <div className="field">
        <label className="label">Email</label>
        <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        </div>
        </div>
    </div>)
    }
}