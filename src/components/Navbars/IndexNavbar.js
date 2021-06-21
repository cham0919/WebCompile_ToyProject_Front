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
import Axios from 'axios';
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import {useHistory} from "react-router";
import storage from "../../lib/storage";

export default function IndexNavbar() {
  const history = useHistory();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [isLogin, setIsLogin] = React.useState(false);
  const [userName, setuserName] = React.useState("");
  React.useEffect(() => { getUrlFromSignInCheck()
    window.addEventListener("scroll", changeColor);

    //login check
    Axios.get("/wcp/auth/check")
        .then(function (data) {
          // response
          console.log(data.data.result)
          setIsLogin(data.data.result)
          // alert(isLogin)
        }).catch(function (error) {
      // 오류발생시 실행
      setIsLogin(false)
      setuserName("SignIn")
    }).then(function() {
      // 항상 실행
    });

    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);


  const getIsLogin = () => {
    return isLogin;
  }

  const getUrlFromSignInCheck = () => {
    return isLogin ? "/userHome-page" : "/login";
  }

  function showLogout(){
    return (
        <Button
            className="btn-simple btn-round btn-neutral"
            onClick={Logout}>
          <text
              style="display:none"
          >Logout</text>
        </Button>
    );
  }

  function checkLogin(){
    if (isLogin) {
      return (
          <i className="tim-icons icon-single-02" />
      );
    } else {
      return (
          "SignIn"
      );
    }
  }



  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const Logout = () => {
    Axios.get("/wcp/auth/logout")
        .then(function (response) {
          // response
          setIsLogin(false)
          storage.remove("userInfo")
          history.push("/components");
          // window.location.href="/components";
        }).catch(function (error) {
      // 오류발생시 실행
    }).then(function() {
      // 항상 실행
    });
  }


  const proxyBoardInsertTest = () => {
 Axios.get("/wcp/user/check")
     .then(function (response) {
          // response
          console.log(response)
     }).catch(function (error) {
         // 오류발생시 실행
     }).then(function() {
         // 항상 실행
     });
  }
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>WCP</span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper" />
                  Documentation
                </DropdownItem>
                <DropdownItem tag={Link} to="/login">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02" />
                  Landing Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Profile Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
               onClick={proxyBoardInsertTest}
              >
                <i className="tim-icons icon-spaceship" /> proxy test
              </Button>
            </NavItem>
            <NavItem
                style={{ display: isLogin ? "block" : "none" }}
            >
              <Button
                  className="btn-simple btn-round btn-neutral"
                  onClick={Logout}>
                Logout
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                tag={Link} to={getUrlFromSignInCheck}
              >
                {checkLogin()}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
