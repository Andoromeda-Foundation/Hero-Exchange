import React from "react"
import { giveMeMoney } from "../utils";
const DownloadURL = "https://chrome.google.com/webstore/detail/nasextwallet/gehjkhmhclgnkkhpfamakecfgakkfkco"
export default function Footer() {
    return (<footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>星云水浒 OTC</strong> 
        <br />
        Made with React and ❤️ by <a href="https://frankwei.xyz">Frank Wei</a>.
        <br />
        <a onClick={giveMeMoney}> 请站长喝咖啡 </a>
        <br />
        从 Google Chrome 应用商店下载 
        <a href={DownloadURL}> NasExtWallet </a>
        或
        <a href="https://nano.nebulas.io/"> NASnano手机钱包</a>
      </p>
    </div>
  </footer>)
}