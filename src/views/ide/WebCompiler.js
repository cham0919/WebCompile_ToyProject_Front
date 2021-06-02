/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
// reactstrap components
// core components
import {useLocation} from "react-router";
import {Helmet} from "react-helmet";
import Axios from "axios";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

export default function WebCompiler(props) {
  const location = useLocation();
  const itemStyle1 = "background-color: #ff4500 !important; color: white !important";
  const itemStyle2 = "background-color: #1da1f2 !important; color: white !important";
  const itemStyle3 = "background-color: #1877f2 !important; color: white !important";
  const [testId, setTestId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [language, setLanguage] = React.useState("");

    const languageList = ["C", "C++", "Clojure", "C#", "Go", "Java", "JavaScript", "Kotlin", "Python", "R", "Ruby",
        "Rust", "Scala", "SQL", "Swift", "TypeScript"];
    const languageCodeList = ["50", "54", "86", "51", "60", "62", "63", "78", "71", "80", "72",
        "73", "81", "82", "83", "74"];
    const languageModeList = ["c", "cpp", "clojure", "csharp", "go", "java", "javascript", "kotlin", "python", "r", "ruby",
        "rust", "UNKNOWN", "sql", "swift", "typescript"];

    let languageInfo = new Map();
    languageInfo.set("50",["c","C"]);
    languageInfo.set("54",["cpp","C++"]);
    languageInfo.set("86",["clojure","Clojure"]);
    languageInfo.set("51",["csharp","C#"]);
    languageInfo.set("62",["java","Java"]);
    languageInfo.set("63",["javascript","JavaScript"]);
    languageInfo.set("78",["kotlin","Kotlin"]);
    languageInfo.set("71",["python","Python"]);
    languageInfo.set("80",["r","R"]);
    languageInfo.set("72",["ruby","Ruby"]);
    languageInfo.set("73",["rust","Rust"]);
    languageInfo.set("81",["UNKNOWN","Scala"]);
    languageInfo.set("82",["sql","SQL"]);
    languageInfo.set("83",["swift","Swift"]);
    languageInfo.set("74",["typescript","TypeScript"]);

  const fetchTestInfo = (testId) => {
      setTestId(testId);

      const url = "/wcp/coding/test/"+testId;
      Axios.get(url)
          .then(function (response) {
              //글 등록
              const data = response.data;
              setTitle(data.title);
              setContent(data.content);
              setLanguage(data.language);
          }).catch(function (error) {
          alert("Fail To fetch TestInfo!");
      });
  }

  const renderingLanguage = () => {
      let array = language.replaceAll("\"","").slice(1, -1).split(/,\s?/);
      const result = [];
      for(let i = 0; i < array.length; i++){
          let a = languageInfo.get(array[i]);
          if(a && a.length > 0){
              result.push(
                  <option value={array[i]} mode={a[0]}>{a[1]}</option>
              );
          }
      };
      return result;
  }


  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
    }
    document.body.classList.toggle("wcp/ide");
    fetchTestInfo(props.match.params.testId);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("wcp/ide");
    };
  },[]);
  return (
    <>
    <Helmet>
        <script type="text/javascript" src="/assets/js/ide.js"></script>
    </Helmet>
      {/*<ExamplesNavbar />*/}
      <div id="site-navigation" className="ui small inverted menu">
        <div id="site-header" className="header item">
          <a href="/">
            <img id="site-icon"  src="../../assets/img/judge0_icon.png"/>
              <h2>WCP</h2>
          </a>
        </div>

        <div className="left menu">
          <div className="ui dropdown item site-links on-hover">
            File <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" target="_blank" href="/"><i className="file code icon"></i> New File</a>
              {/*<div className="item" onClick="downloadSource()"><i className="download icon"></i> Download</div>*/}
              <div className="item" ><i className="download icon"></i> Download</div>
              <div className="item" ><i className="download icon"></i> Download</div>
              <div id="insert-template-btn" className="item"><i className="file code outline icon"></i> Insert template
                for current language
              </div>
            </div>
          </div>
         {/*<div className="link item" onClick="$('#site-settings').modal('show')"><i className="cog icon"></i> Settings*/}
         <div className="link item" ><i className="cog icon"></i> Settings </div>
            <div className="item borderless">
                <select id="select-language" className="ui dropdown">
                    {renderingLanguage()}
                    {/*<option value="50" mode="c">C</option>
                    <option value="54" mode="cpp">C++</option>
                    <option value="51" mode="csharp">C#</option>
                    <option value="86" mode="clojure">Clojure</option>
                    <option value="60" mode="go">Go</option>
                    <option value="62" mode="java">Java</option>
                    <option value="63" mode="javascript">JavaScript</option>
                    <option value="78" mode="kotlin">Kotlin</option>
                    <option value="71" mode="python">Python</option>
                    <option value="80" mode="r">R</option>
                    <option value="72" mode="ruby">Ruby</option>
                    <option value="73" mode="rust">Rust</option>
                    <option value="81" mode="UNKNOWN">Scala</option>
                    <option value="82" mode="sql">SQL</option>
                    <option value="83" mode="swift">Swift</option>
                    <option value="74" mode="typescript">TypeScript</option>*/}
                </select>
            </div>
           <div className="item fitted borderless wide screen only">
             <div className="ui input">
               <input id="compiler-options" type="text" placeholder="Compiler options"></input>
             </div>
           </div>
           <div className="item borderless wide screen only">
             <div className="ui input">
               <input id="command-line-arguments" type="text" placeholder="Command line arguments"></input>
             </div>
           </div>
           <div className="item no-left-padding borderless">
             <button id="run-btn" className="ui primary labeled icon button"><i className="play icon"></i>Run (F9)
             </button>
           </div>
           <div id="navigation-message" className="item borderless">
             <span className="navigation-message-text"></span>
           </div>
        </div>
        <div className="right menu">
          <div id="judge0-more" className="ui dropdown item site-links">
            More
            <i className="dropdown icon"/>
            <div className="menu">
                <a id="about" className="link item" target="_blank" href="https://judge0.com/ce">
                  <i className="server icon"/> API</a>
                <div className="divider"/>
                <a className="item" target="_blank" href="https://www.patreon.com/hermanzdosilovic">
                  <i className="patreon icon"/>
                  Become a Patron</a>
                <a className="item" target="_blank" href="https://paypal.me/hermanzdosilovic">
                  <i className="paypal icon"/>
                  Donate with PayPal</a>
                <div className="divider"/>
                <a className="item" target="_blank" href="https://github.com/judge0/ide">
                  <i className="github icon"/>
                  View source
                  code on Github</a>
                <a className="item" target="_blank" href="https://github.com/judge0/ide/issues/new">
                  <i className="exclamation circle icon"/> Report an issue</a>
                <div className="divider"/>
                <a className="item" target="_blank" href="https://subscribe.judge0.com">
                  <i className="envelope icon"/>
                  Subscribe
                  to Judge0 newsletter</a>
                <a className="item" target="_blank" href="https://discord.gg/GRc3v6n">
                  <i className="discord icon"/> Join a Discord server</a>
                <div className="divider"/>
                <a className="item" target="_blank" href="mailto:hermanz.dosilovic@gmail.com">
                  <i className="paper plane icon"/>
                  Contact the author</a>
                <a className="item" target="_blank" href="https://hermanz.dosilovic.com">
                  <i className="user icon"/> About
                  the
                  author</a>
                <div className="divider"/>
                <a className="item" target="_blank"
                   href="https://www.reddit.com/submit?url=https%3A%2F%2Fide.judge0.com&title=Judge0%20IDE"
                    // style="background-color: #ff4500 !important; color: white !important;"><i
                   style={{itemStyle1}}>
                  <i className="reddit icon"/> Share
                  on Reddit</a>
                <a className="item" target="_blank"
                   href="https://twitter.com/intent/tweet?text=Judge0%20IDE&url=https%3A%2F%2Fide.judge0.com&via=hermanzvonimir"
                    // style="background-color: #1da1f2 !important; color: white !important;"><i
                   style={{itemStyle2}}><i className="twitter icon"/>
                  Share on Twitter</a>
                <a className="item" target="_blank"
                   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fide.judge0.com"
                    // style="background-color: #1877f2 !important; color: white !important;"><i
                   style={{itemStyle3}}><i className="facebook icon"/>
                  Share on Facebook</a>
              </div>
            </div>
          </div>
      </div>

      <div id="site-content"></div>
        <input id="content" value={content} readOnly/>

      <div id="site-modal" className="ui modal">
        <div className="header">
          <i className="close icon"></i>
          <span id="title"></span>
        </div>
        <div className="scrolling content"></div>
        <div className="actions">
          <div className="ui small labeled icon cancel button">
            <i className="remove icon"></i>
            Close (ESC)
          </div>
        </div>
      </div>

      <div id="site-settings" className="ui modal">
        <i className="close icon"></i>
        <div className="header">
          <i className="cog icon"></i>
          Settings
        </div>
        <div className="content">
          <div className="ui form">
            <div className="inline fields">
              <label>Editor Mode</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="editor-mode" value="normal" checked="checked" readOnly/>
                    <label>Normal</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="editor-mode" value="vim"/>
                    <label>Vim</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="editor-mode" value="emacs"/>
                    <label>Emacs</label>
                </div>
              </div>
            </div>
            <div className="inline field">
              <div className="ui checkbox">
                <input type="checkbox" name="redirect-output"/>
                  <label>Redirect stderr to stdout</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="site-footer">
        <span id="donate-line">
            <a className="item" target="_blank" href="https://www.patreon.com/hermanzdosilovic"><i
                className="patreon icon" ></i> Become a Patron</a>
            <a className="item" target="_blank" href="https://paypal.me/hermanzdosilovic"><i className="paypal icon"
                                                                                             ></i> Donate with PayPal</a>
      </span>
      <div id="editor-status-line"></div>
      <span>© 2016-2021 <a href="https://judge0.com?ref=ide">Judge0</a> · Powered by <a
          href="https://judge0.com?ref=ide">Judge0</a></span>
        <span id="status-line"></span>
    </div>
        </>
  );
}
