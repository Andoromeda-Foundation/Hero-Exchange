import React from "react"

const questionsAndAnswers = [
    {
        question: '关于星云水浒 OTC ',
        answer: " 星云水浒 OTC ，非官方，不担保的类 58 同城信息发布平台, 定位于信息中介 "
    },
    {
        question: '在你们平台交易有安全风险吗',
        answer: "星云水浒 OTC 是一个信息中介平台， 具体购买、销售等交易操作是在游戏合约进行。"
    },
    {
        question: '你们保证广告的真实性吗',
        answer: "星云水浒 OTC 是一个信息中介平台，平台本身并不保证广告的实时性，真实性。（尽管我采取了一些措施）。请你跳转到星云水浒进行交易前请务必核对卡牌信息是否正确。"
    },
    {
        question: '你真棒！我要给你打钱',
        answer: "请点击下方「给我打钱」，或把 NAS 转账到 n1LfKSRdLxxDF6x2FY2MtgfppEBF4cVqkaa，爱你，mua"
    },
    
    {
        question: '功能会持续改进吗',
        answer: "星云水浒 OTC 是个人作品，改不改进全靠个人心情和状况（暗示打钱）"
    },
]

function QuestionAndAnswer({question, answer}) {
    return (
        <div className="qna">
            <h1 class="title"> Q: {question} ? </h1>
            <p class="subtitle"> A: {answer} </p>
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

