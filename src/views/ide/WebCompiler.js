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
import {useHistory, useLocation} from "react-router";
import {Helmet} from "react-helmet";
import Axios from "axios";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

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
  const [postId, setpostId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const history = useHistory();

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

  const back = () => {
    history.push({
      pathname: "/coding/room/post/"+postId
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
    setpostId(props.match.params.postId)
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
      <div id="site-navigation" className="ui small inverted menu">
        <div id="site-header" className="header item">
          <a href="/">
              <h2>WCP</h2>
          </a>
        </div>

        <div className="left menu">
         <div className="link item" onClick={back} >돌아가기</div>
            <div className="item borderless">
                <select id="select-language" className="ui dropdown">
                    {renderingLanguage()}
                </select>
            </div>
           <div className="item fitted borderless wide screen only">
             <div className="ui input">
               <input id="compiler-options" type="hidden" placeholder="Compiler options"></input>
             </div>
           </div>
           <div className="item borderless wide screen only">
             <div className="ui input">
               <input id="command-line-arguments" type="hidden" placeholder="Command line arguments"></input>
             </div>
           </div>
           <div className="item no-left-padding borderless">
             <button id="run-btn" className="ui primary labeled icon button"><i className="play icon"></i>Run (F9)
             </button>
           </div>
        </div>
      </div>

      <div id="site-content"></div>
        <input type="hidden" id="content" value={content} readOnly/>

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
