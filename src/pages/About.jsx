import React from "react"

const questionsAndAnswers = [
    {
        question: '关于 OTC',
        answer: " 非官方，不担保的类 58 同城信息发布平台, 定位于信息中介 "
    },
    {
        question: '有安全风险吗',
        answer: "OTC 是一个信息中介平台， 具体购买、销售操作是在合约进行。"
    }
]

function QuestionAndAnswer({question, answer}) {
    return (
        <div className="qna">
            <h1 class="title"> {question} ? </h1>
            <p class="subtitle"> {answer} </p>
        </div>
    )
}

export function About({siteName}) {
    return (<div className="about" style={{textAlign: "left"}}>
        <h1 class="title medium"> 关于本站 </h1>
        {
            questionsAndAnswers.map(
                (props) => <QuestionAndAnswer {...props} />
            )
        }
    </div>)
}

