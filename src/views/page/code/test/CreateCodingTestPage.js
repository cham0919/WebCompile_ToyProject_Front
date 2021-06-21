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
import IndexNavbar from "../../../../components/Navbars/IndexNavbar";

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


export default function CreateCodingTestPage(props) {
  const [postId, setPostId] = React.useState("");
  const [userAuth, setUserAuth] = React.useState("all");
  const [fileName, setFileName] = React.useState("");
  const history = useHistory();
  const changeUserAuth = (auth) => {
    setUserAuth(auth.target.id)
  }

  const languageList = ["C", "C++", "Clojure", "C#", "Go", "Java", "JavaScript", "Kotlin", "Python", "R", "Ruby",
  "Rust", "Scala", "SQL", "Swift", "TypeScript"];
  const languageCodeList = ["50", "54", "86", "51", "60", "62", "63", "78", "71", "80", "72",
    "73", "81", "82", "83", "74"];
  const languageRendering = (n) => {
    const result = []; // 1 -> 1~4 / 2 -> 5~8 / 3 -> 9~12 / 4 -> 13 ~ 16
    for (let i = n*4-3; i <= n*4; i++) {
      result.push(
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="language" value={languageCodeList[i-1]} />
              <span className="form-check-sign" />
              {languageList[i-1]}
            </Label>
          </FormGroup>
      );
    }
    return result;
  }

  const checkUploadFile = () => {
    const filePath = document.getElementById("file").value;
    const pathHeader = filePath.lastIndexOf("\\");
    const pathMiddle = filePath.lastIndexOf(".");
    const pathEnd = filePath.length;
    const fileName = filePath.substring(pathHeader+1, pathMiddle);
    const extName = filePath.substring(pathMiddle+1, pathEnd);
    const allFilename = fileName+"."+extName;

    setFileName(allFilename)
  }

  const submitCodePost = () => {
    const url = "/wcp/coding/test/" + postId;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let languages = document.getElementsByName("language");
    let language = [];
    for (let i = 0; i < languages.length; i++){
      if(languages[i].checked){
        language.push(languages[i].value);
      }
    }
    language = JSON.stringify(language);
    // checkFile
    let checkFile = document.getElementById("file").files[0];
    let formData = new FormData();
    formData.append("file", checkFile);
    formData.append("language", language);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("auth", userAuth);

    Axios.post(url, formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
        .then(function (response) {
          alert("Success To register!");
          history.push({
            pathname: "/coding/room/post/"+postId
          });
        }).catch(function (error) {
      alert("Fail To Insert!")
    });
  }



  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
    }
    document.body.classList.toggle("coding/test/insert");
    setPostId(props.match.params.postId);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("coding/test/insert");
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
                    <h1 className="profile-title text-left">Create Coding Test</h1>
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
                            <label>Content</label>
                            <Input  id="content" placeholder="문제를 적어주세요" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>User Auth</label>
                            <UncontrolledDropdown>
                              <DropdownToggle caret  data-toggle="dropdown">
                                {userAuth}
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem id="all"
                                 onClick={changeUserAuth}>all</DropdownItem>
                                <DropdownItem id="joinUser"
                                    onClick={changeUserAuth}>joinUser</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="2">
                          <FormGroup>
                            <label>Language</label>
                            {languageRendering(1)}
                            </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <label/>
                            {languageRendering(2)}
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <label/>
                            {languageRendering(3)}
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <label/>
                            {languageRendering(4)}
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
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="info info-horizontal" >
                <FormGroup>
                  <label><p>Answer Test File</p></label><br/>
                  <div className="description">
                      해당 파일은 메모장으로 문제에 대한 테스트 input은 ',' output은 띄어쓰기로 넣어
                    제출해주세요. 자세한 내용은 차후 modal창으로 update 예정
                  </div><br/>
                  <label><p>등록 File : {fileName}</p></label><br/>
                  <Button className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button">
                    <i className="tim-icons icon-upload"></i>
                    <Input  id="file"  type="File" onChange={checkUploadFile}/>
                  </Button>
                </FormGroup>
                </div>
              </Col>

            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
