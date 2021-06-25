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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Axios from "axios";
import {useHistory, useLocation} from "react-router";
import {Link} from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

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



class CodingRoomInfo {
  constructor(data) {
    this.key = data.key;
    this.title = data.title;
    this.maxUser = data.maxUser;
    this.secret = data.secret;
    this.joinUsersCount = data.joinUsersCount;
    this.codingTestCount = data.codingTestCount;
  }
}

class CodingTestInfo {
  constructor(data) {
    this.key = data.key;
    this.language = data.language;
    this.postId = data.postId;
    this.title = data.title;
    this.userKey = data.userKey;
    this.isPass = data.isPass;
  }
}


export default function CodingRoomPost(props) {
  const location = useLocation();
  const [postId, setPostId] = React.useState();
  const [codingTestUrl, setCodingTestUrl] = React.useState("");
  const [codingRoomInfo, setCodingRoomInfo] = React.useState("");
  const [codingTestList, setCodingTestList] = React.useState([]);


  //page
  const [startPage, setStartPage] = React.useState(1);
  const [endPage, setEndPage] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalEndPage, setTotalEndPage] = React.useState(1);

  const history = useHistory();



  const fetchCodingRoomPostInfo = (postId) => {
    const url = `/wcp/coding/room/${postId}`;
    console.log(url)
    Axios.get(url)
        .then(function (response) {
          //글 등록
          const data = response.data;
          setCodingRoomInfo(new CodingRoomInfo(data));
        }).catch(function (error) {
          if(error.response) {
            switch (error.response.status) {
              case 401:
                history.push({
                  pathname: "/login"
                });
              case 403:
                history.push({
                  pathname: "/login"
                });
              default:
                alert("Fail To fetch CodingRoom!");
            }
          } else {
            alert("Fail To fetch CodingRoom!");
          }

    });
  }

  const fetchCodingTestInfoByRoomId = (roomId, page = 1) => {
    const url = `/wcp/coding/room/${roomId}/test`;
    console.log(url)
    Axios.get(url, {
      params: {'pageNm': page}
    })
        .then(function (response) {
          //글 등록
          const dataList = response.data;
          setStartPage(dataList.startPage);
          setEndPage(dataList.endPage);
          setTotalEndPage(dataList.totalEndPage);
          setCodingTestList(dataList.post);
        }).catch(function (error) {
      if(error.response) {
        switch (error.response.status) {
          case 401:
            history.push({
              pathname: "/login"
            });
          case 403:
            history.push({
              pathname: "/login"
            });
          default:
            alert("Fail To fetch CodingRoom!");
        }
      } else {
        alert("Fail To fetch CodingRoom!");
      }

    });
  }

  const checkSecretPost = () => {
    const result = [];
    console.log(codingRoomInfo)
    if(codingRoomInfo.secret){
      result.push(
          <i className="tim-icons icon-lock-circle"/>
      );
    }
    return result;
  }

  const renderingCodingTests = () => {
    const result = [];
    if(codingTestList.length == 0){
      result.push(
          <tr>
            <td className="text-center"></td>
            <td>No Contents</td>
          </tr>
      );
    }else{
      for (const codingTestInfo of codingTestList) {
        result.push(
            <tr>
              <td className="text-center">{codingTestInfo.key}</td>
              <td>{codingTestInfo.title}</td>
              <td>{codingTestInfo.isPass ? "Pass" : ""}</td>
              <td>
                <Button className="btn-icon" color="info" size="sm"
                        to={`/wcp/ide/${postId}/${codingTestInfo.key}`} tag={Link}>
                  <i className="tim-icons icon-pencil"></i>
                </Button>
              </td>
            </tr>
        );
      }
    }

    return result;
  }

  const renderingPagination = () => {
    let result = [];

    result.push(
        <Pagination listClassName="justify-content-center">
          <PaginationItem>
            <PaginationLink onClick={() => {
              if (startPage == 1) {
                alert("이전 페이지가 없습니다")
              } else {
                setCurrentPage(startPage - 1)
              }
            }}>
              Previous
            </PaginationLink>
          </PaginationItem>
          {renderingPaginationNumber()}
          <PaginationItem>
            <PaginationLink onClick={() => {
              if (endPage == totalEndPage) {
                alert("다음 페이지가 없습니다")
              } else {
                setCurrentPage(endPage+1)
              }
            }}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
    )
    return result;
  }

  const renderingPaginationNumber = () => {
    let result = []
    for (let i = startPage; i <= endPage; i++) {
      result.push(
          <PaginationItem>
            <PaginationLink onClick={() => setCurrentPage(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
      );
    }
    return result;
  }

  React.useEffect(() => {
    console.log(currentPage)
    console.log("postId:::::::", props.match.params.postId)
    if (currentPage) {
      fetchCodingTestInfoByRoomId(props.match.params.postId, currentPage);
    } else {
      fetchCodingTestInfoByRoomId(currentPage);
    }
  }, [currentPage]);

  // React.useEffect(() => {
  //   setPostId(props.match.params.postId);
  //   setCodingTestUrl("/coding/test/insert/"+postId);
  //   fetchPostInfo();
  // },[]);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
    }
    document.body.classList.toggle("coding/room/post");
    setPostId(props.match.params.postId);
    setCodingTestUrl(`/coding/test/insert/${props.match.params.postId}`);
    fetchCodingRoomPostInfo(props.match.params.postId);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("coding/room/post");
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
                        {checkSecretPost()}{codingRoomInfo.title}</h1>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>intro</label><br/>
                              {codingRoomInfo.intro}
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="2">
                            <FormGroup>
                              <label>Join User</label><br/>
                              {codingRoomInfo.joinUsersCount}/{codingRoomInfo.maxUser}
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
                      <th>Join</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderingCodingTests()}
                    </tbody>
                  </Table>
                  {renderingPagination()}
                </Col>
              </Row>
            </Container>
          </section>
          <Footer/>
        </div>
      </>
  );
}
