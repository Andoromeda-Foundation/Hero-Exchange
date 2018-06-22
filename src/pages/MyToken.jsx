import React , { Component } from "react";

export default class MyToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foo: 'bar'
        }
    }

    render() {
        return (
            <div className="my-token">
                <h1 className="title">页面建筑中</h1>
                <p className="subtitle">请稍后再试</p>
            </div>
        )
    }
}