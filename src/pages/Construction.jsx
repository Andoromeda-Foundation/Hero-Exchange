import React from "react";

const A11yEmoji = ({emoji, label, style}) => <span role="img" aria-label={label} style={style}> {emoji} </span>

const inConstruction = ({pageName}) => (
        <div className="in-construction">
            <A11yEmoji emoji="⚠️" style={{fontSize: "6rem"}} label="warning" />
            <h1 className="title"> 
            <A11yEmoji emoji="⚠️" label="warning" />
            <A11yEmoji emoji="🔨" label="hammer" />
            「{pageName}」页面建筑中
            <A11yEmoji emoji="🔨" label="hammer" />
            <A11yEmoji emoji="⚠️" label="warning" />
            </h1>
            <p className="subtitle"> 请稍后再回来看看～ </p>
        </div>
)

export const Error404 = () => (
        <div className="in-construction">
            <A11yEmoji emoji="❌" style={{fontSize: "6rem"}} label="warning" />
            <h1 className="title"> 
            <A11yEmoji emoji="❌" label="warning" />
            页面不存在
            <A11yEmoji emoji="❌" label="warning" />
            </h1>
            <p className="subtitle"> 请稍后再回来看看～ </p>
        </div>
)

export default inConstruction