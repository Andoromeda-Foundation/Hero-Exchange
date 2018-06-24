import React from "react"
const DownloadURL = "https://chrome.google.com/webstore/detail/nasextwallet/gehjkhmhclgnkkhpfamakecfgakkfkco"
export default function Footer() {
    return (<footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>星云水浒 OTC</strong> 
        <br />
        Made with ❤️ by <a href="https://frankwei.xyz">Frank Wei</a>.
        <br />
        星云水浒™️ 是 仙女座科技有限公司的商标。
        <br />
        从 Google Chrome 应用商店下载 
        <a href={DownloadURL}> NasExtWallet</a>, 一个开源且安全的星云链钱包
      </p>
    </div>
  </footer>)
}