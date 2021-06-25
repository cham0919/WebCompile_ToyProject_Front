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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Row,
  Label,
  UncontrolledDropdown,
  UncontrolledTooltip,
  CustomInput
} from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import Axios from "axios";
import  { useHistory} from 'react-router';
import bigChart from "../../variables/charts";
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


export default function InsertCodeBoardPage() {
  const [maxUser, setMaxUser] = React.useState(5);
  const history = useHistory();
  const changeMaxUser = (cnt) => {
    setMaxUser(cnt.target.id)
  }

  const submitCodePost = () => {
    const url = "/wcp/coding/room/"
    let title = document.getElementById("title").value;
    let intro = document.getElementById("intro").value;
    let password = document.getElementById("password").value.trim();


    if(title.trim() == ""){
      alert("제목을 입력해주세요");
      return;
    }
    if(intro.trim() == ""){
      alert("소개를 입력해주세요");
      return;
    }

    let data
    if (password == "") {
      data = {title, intro, maxUser}
    } else {
      data = {title, intro, password, maxUser}
    }

    Axios.post(url, data)
        .then(function (response) {
          alert("Success To Insert!");
          history.push("/coding/room/post/"+response.data.key.toString());
        }).catch(function (error) {
      console.log(error)
      alert("Fail To Insert!")
    });
  }



  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
    }
    document.body.classList.toggle("/coding/room/insert");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("api/coding/room/insert");
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
                    <h1 className="profile-title text-left">Create Code Room</h1>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Title</label>
                            <Input placeholder="title" id="title" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>intro</label>
                            <Input  id="intro" placeholder="방에 대한 간단한 소개를 적어주세요" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="2">
                          <FormGroup>
                            <label>Max User</label>
                            <UncontrolledDropdown>
                              <DropdownToggle caret  data-toggle="dropdown">
                                {maxUser}
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem id="5"
                                 onClick={changeMaxUser}>5</DropdownItem>
                                <DropdownItem id="10"
                                    onClick={changeMaxUser}>10</DropdownItem>
                                <DropdownItem id="15"
                                    onClick={changeMaxUser}>15</DropdownItem>
                                <DropdownItem id="20"
                                    onClick={changeMaxUser}>20</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
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
                        onClick={submitCodePost}
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
