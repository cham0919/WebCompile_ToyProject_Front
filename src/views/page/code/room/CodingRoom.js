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

class CodingRoomInfo {
    constructor(data) {
        this.key = data.key;
        this.title = data.title;
        this.maxUser = data.maxUser;
        this.joinUser = data.codingJoinUsers.length;
        this.testCount = data.codingTests.length;
    }
}


export default function CodingRoom() {
    const [tabs, setTabs] = React.useState(1);
    const [startPage, setStartPage] = React.useState(1);
    const [endPage, setEndPage] = React.useState(10);
    const [codingRoomInfoList, setCodingRoomInfoList] = React.useState([]);

    const history = useHistory();

    const fetchCodingRoomPaging = (page) => {
        console.log("이게 세번?")
        const url = "/wcp/coding/room/page/"+page;
        Axios.get(url)
            .then(function (response) {
                console.log(response)
                const datas = response.data;
                let codingRoomInfoList = [];
                setStartPage(datas.startPage);
                setEndPage(datas.endPage);

                // for (const data of datas) {
                //     codingRoomInfoList.push(new CodingRoomInfo(data));
                // }
                // setCodingRoomInfoList(codingRoomInfoList)
            }).catch(function (error) {
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
        });
    }

    const getPosts = (page) => {
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
                        <td className="text-center"><a href={"/coding/room/post/" + codingRoomInfo.key}>{codingRoomInfo.title}</a></td>
                        <td className="text-right">{codingRoomInfo.joinUser} / {codingRoomInfo.maxUser}</td>
                        <td className="text-center">{codingRoomInfo.testCount}</td>
                    </tr>
                );
            }
        }
        return postInfo;
    }

    const getCreateButton = () => {
        const result = []
        const userInfo = storage.get("userInfo")
        if (userInfo != null && userInfo.role == "MEMBER") {
            result.push(
                <tr>
                    <td></td><td></td><td></td>
                    <td className="text-right">
                        <Button className="btn-round"
                                color="primary"
                                type="button"
                                to="/coding/room/insert" tag={Link}>
                            방 개설
                        </Button>
                    </td>
                </tr>
            );
        }
        return result
    }

    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
        }
        document.body.classList.toggle("/coding/room");
        //init
        fetchCodingRoomPaging(1)


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
                {getPosts(1)}
                {getCreateButton()}
                </tbody>
            </Table>
        </>
    );
}
