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
import SignIn from "views/page/auth/SignIn.js";
import ProfilePage from "views/page/ProfilePage.js";
import SignUp from "./views/page/auth/SignUp";
import InsertCodeBoardPage from "./views/page/InsertCodeBoardPage";
import CodingRoomPost from "./views/page/code/room/CodingRoomPost";
import CreateCodingTestPage from "./views/page/code/test/CreateCodingTestPage";
import WebCompiler from "./views/ide/WebCompiler";
import CodingRoom from "./views/page/code/room/CodingRoom";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
          path="/coding/room/insert"
          render={(props) => <InsertCodeBoardPage {...props} />}
      />
      <Route
          path="/coding/room/post/:postId"
          render={(props) => <CodingRoomPost {...props} />}
      />
      <Route
          path="/coding/room"
          render={(props) => <CodingRoom {...props} />}
      />
      <Route
        path="/login"
        render={(props) => <SignIn {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
          path="/signUp"
          render={(props) => <SignUp {...props} />}
      />

      <Route
          path="/coding/test/insert/:postId"
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
