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
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import $ from "jquery";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import Axios from "axios";
import {useHistory} from "react-router";
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


export default function SignUp() {
  const [tabs, setTabs] = React.useState(1);
  const history = useHistory();

  const signUp = () => {
    const url = "/wcp/signUp"
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value

    if(name.trim() == ""){
      alert("아이디를 입력해주세요");
      return;
    }
    if(password.trim() == ""){
      alert("비밀번호를 입력해주세요");
      return;
    }

    if(!isEmail(email)){
      alert("이메일을 확인해주세요");
      return;
    }

    if(!isMobile(phone)){
      alert("핸드폰 번호를 확인해주세요");
      return;
    }



    let data = {
      "name": name,
      "id": email,
      "phone": phone,
      "password": password
    };
    Axios.post(url, data)
        .then(function (response) {
          alert("Success To SignUp!");
          history.push("/login");
        }).catch(function (error) {
      alert("Fail To SingUp!")
    }).then(function() {
      // 항상 실행
    });
  }


  const isMobile = (phoneNum) => {
    var regExp =/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
    if(regExp.test(phoneNum)){
      return true;
    } else {
      return false;
    }
  }

  const isEmail = (email) => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(regExp.test(email)){
      return true;
    } else {
      return false;
    }
  }

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
    }
    document.body.classList.toggle("signUp");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("signUp");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Sign Up</h1>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input  id="name" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input  id="email" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input id="phone" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Password</label>
                            <Input id="password" name="password" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        onClick={signUp}
                      >
                        Submit
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
