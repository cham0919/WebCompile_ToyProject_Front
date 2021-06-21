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
import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Row, Table} from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import Axios from "axios";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

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


export default function CodeBoardPostPage(props) {
  const location = useLocation();
  const [title, setTitle] = React.useState("");
  const [intro, setIntro] = React.useState("");
  const [maxUser, setMaxUser] = React.useState(0);
  const [currentUser, setCurrentUser] = React.useState(0);
  const [password, setPassword] = React.useState("");
  const [postId, setPostId] = React.useState("");
  const [codingTestUrl, setCodingTestUrl] = React.useState("");
  const [codingContents, setCodingContents] = React.useState("");




  const fetchPostInfo = (postId) => {
    setPostId(postId);
    setCodingTestUrl("/create/codingTest/"+postId);
    const url = "/wcp/coding/board/"+postId;
    Axios.get(url)
        .then(function (response) {
          //글 등록
          const data = response.data;
          console.log(response)
          setTitle(data.title);
          setIntro(data.intro);
          setMaxUser(data.maxUser);
          setCurrentUser(data.codingJoinUsers.length);
          setPassword(data.password);
          setCodingContents(data.codingTests);
        }).catch(function (error) {
      alert("Fail To fetch PostInfo!");
    });
  }

  const checkSecretPost = () => {
    const result = [];
    if(password.trim() != ""){
      result.push(
          <i className="tim-icons icon-lock-circle"/>
      );
    }
    return result;
  }

  const getContents = () => {
    const result = [];
    if(codingContents.length == 0){
      result.push(
          <tr>
            <td className="text-center"></td>
            <td>No Contents</td>
          </tr>
      );
    }else{
      for (const content of codingContents) {
        result.push(
            <tr>
              <td className="text-center">{content.key}</td>
              <td>{content.title}</td>
              <td>0%</td>
              <td>
                <Button className="btn-icon" color="info" size="sm"
                        to={"/wcp/ide/" + content.key} tag={Link}>
                  <i className="tim-icons icon-pencil"></i>
                </Button>
              </td>
            </tr>
        );
      }

    }

    return result;
  }


  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
    }
    document.body.classList.toggle("codeBoard-post-page");
    fetchPostInfo(props.match.params.postId);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("codeBoard-post-page");
    };
  },[]);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">
                      {checkSecretPost()}{title}</h1>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>intro</label><br/>
                            {intro}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="2">
                          <FormGroup>
                            <label>Join User</label><br/>
                            {currentUser}/{maxUser}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        tag={Link} to={codingTestUrl}
                      >
                        Create Test
                      </Button>
                      <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                      >
                        Join
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Table>
                  <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Title</th>
                    <th>Pass</th>
                  </tr>
                  </thead>
                  <tbody>
                  {getContents()}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
