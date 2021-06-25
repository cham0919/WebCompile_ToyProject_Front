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
import {Button, Table,} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// core components
import {Link} from "react-router-dom";
import Axios from "axios";
import storage from "../../../../lib/storage";
import {useHistory} from "react-router";

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


export default function CodingRoom(props) {
    const [startPage, setStartPage] = React.useState(1);
    const [endPage, setEndPage] = React.useState(1);
    const [codingRoomInfoList, setCodingRoomInfoList] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalEndPage, setTotalEndPage] = React.useState(1);

    const history = useHistory();

    const renderOnePagePost = () => {
        const postInfo = [];
        if (codingRoomInfoList.length == 0) {
            postInfo.push(
                <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td>No Post</td>
                </tr>
            );
        }else{
            for (const codingRoomInfo of codingRoomInfoList) {
                postInfo.push(
                    <tr>
                        <td className="text-center">{codingRoomInfo.key}</td>
                        {/*<td className="text-center"><a href={`/coding/room/post/${codingRoomInfo.key}`}>{codingRoomInfo.title}</a></td>*/}
                        <td className="text-center"><a onClick={() => {
                            history.push({
                                pathname: `/coding/room/post/${codingRoomInfo.key}`
                            });
                        }}>{codingRoomInfo.title}</a></td>
                        <td className="text-right">{codingRoomInfo.joinUsersCount} / {codingRoomInfo.maxUser}</td>
                        <td className="text-center">{codingRoomInfo.codingTestCount}</td>
                    </tr>
                );
            }
        }
        return postInfo;
    }

    const getPosts = (page = 1) => {
        const url = `/wcp/coding/room/page/${page}`;
        Axios.get(url)
            .then(function (response) {
                const dataList = response.data;
                setStartPage(dataList.startPage);
                setEndPage(dataList.endPage);
                setTotalEndPage(dataList.totalEndPage);
                setCodingRoomInfoList(dataList.post);
            }).catch(function (error) {
            if(!error.response) {
                alert("Fail To fetch CodingRoom!");
            }else {
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
            }
        });
    }

    const getCreateButton = () => {
        const result = []
        const userInfo = storage.get("userInfo")
        if (userInfo != null && userInfo.role == "MEMBER") {
            result.push(
                // <Pagination listClassName="justify-content-end">
                <div style={{textAlign: 'right'}}>
                        <Button className="btn-round"
                                color="primary"
                                type="button"
                                to="/coding/room/insert" tag={Link}>
                            방 개설
                        </Button>
                </div>
                // </Pagination>
            );
        }
        return result
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
        if (currentPage) {
            getPosts(currentPage);
        } else {
            getPosts();
        }
    }, [currentPage]);

    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
        }
        document.body.classList.toggle("/coding/room");
        //init


        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("coding/room");
        };
    },[]);
    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Title</th>
                    <th className="text-right">User</th>
                    <th className="text-center">TestCount</th>
                </tr>
                </thead>
                <tbody>
                {renderOnePagePost()}
                </tbody>
            </Table>
            {renderingPagination()}
            {getCreateButton()}
        </>
    );
}
