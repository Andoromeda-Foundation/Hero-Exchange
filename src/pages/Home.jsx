import React from "react"

const logo = 'https://ws2.sinaimg.cn/large/006tKfTcgy1fs8c8otwtlj31kw1d6kaj.jpg'

export default function Home() {
    return (<div className="index-page">
            <img src={logo} alt="给你比心" style={{ maxWidth: "75%" }} />
    </div>)
}