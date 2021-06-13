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
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";


import Index from "views/Index.js";
import LandingPage from "views/page/LandingPage.js";
import RegisterPage from "views/page/RegisterPage.js";
import ProfilePage from "views/page/ProfilePage.js";
import SignUpPage from "./views/page/SignUpPage";
import InsertCodeBoardPage from "./views/page/InsertCodeBoardPage";
import CodeBoardPostPage from "./views/page/CodeBoardPostPage";
import CreateCodingTestPage from "./views/page/codingBoard/CreateCodingTestPage";
import WebCompiler from "./views/ide/WebCompiler";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
          path="/mainboard-page"
          render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
          path="/signUp-page"
          render={(props) => <SignUpPage {...props} />}
      />
      <Route
          path="/insert-codeBoard-page"
          render={(props) => <InsertCodeBoardPage {...props} />}
      />
      <Route
          path="/codeBoard-post-page/:postId"
          render={(props) => <CodeBoardPostPage {...props} />}
      />
      <Route
          path="/create/codingTest/:postId"
          render={(props) => <CreateCodingTestPage {...props} />}
      />
      <Route
          path="/wcp/ide/:testId"
          render={(props) => <WebCompiler {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
