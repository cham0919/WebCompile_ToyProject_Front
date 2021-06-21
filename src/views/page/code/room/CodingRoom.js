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

class CodingRoom {
    constructor(data) {
        this.key = data.key;
        this.title = data.title;
        this.maxUser = data.maxUser;
    }
}

export default function MainBoardPage() {
    const [tabs, setTabs] = React.useState(1);
    const [post, setPost] = React.useState("");


    const fetchCodingRooms = () => {
        const url = "/wcp/coding/room";
        Axios.get(url)
            .then(function (response) {
                //글 등록
                const data = response.data;
                console.log(data)
                setPost(new CodingRoom(data))
            }).catch(function (error) {
            alert("Fail To fetch CodingRoom!");
        });
    }


    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
        }
        document.body.classList.toggle("mainboard-page");
        fetchCodingRooms();
        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("mainboard-page");
        };
    },[]);
    return (<>
            <Table >
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Job Position</th>
                    <th className="text-center">Since</th>
                    <th className="text-right">Salary</th>
                    <th className="text-right">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td className="text-center">2013</td>
                    <td className="text-right">€ 99,225</td>
                    <td className="text-right">
                        <Button className="btn-icon" color="info" size="sm">
                            <i className="fa fa-user"></i>
                        </Button>{` `}
                        <Button className="btn-icon" color="success" size="sm">
                            <i className="fa fa-edit"></i>
                        </Button>{` `}
                        <Button className="btn-icon" color="danger" size="sm">
                            <i className="fa fa-times" />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">2</td>
                    <td>Manuel Rico</td>
                    <td>Manager</td>
                    <td className="text-center">2012</td>
                    <td className="text-right">€ 99,201</td>
                    <td className="text-right">
                        <Button className="btn-icon btn-round" color="info" size="sm">
                            <i className="fa fa-user"></i>
                        </Button>{` `}
                        <Button className="btn-icon btn-round" color="success" size="sm">
                            <i className="fa fa-edit"></i>
                        </Button>{` `}
                        <Button className="btn-icon btn-round" color="danger" size="sm">
                            <i className="fa fa-times" />
                        </Button>{` `}
                    </td>
                </tr>
                <tr>
                    <td className="text-center">3</td>
                    <td>Alex Mike</td>
                    <td>Designer</td>
                    <td className="text-center">2012</td>
                    <td className="text-right">€ 99,201</td>
                    <td className="text-right">
                        <Button className="btn-icon btn-simple" color="info" size="sm">
                            <i className="fa fa-user"></i>
                        </Button>{` `}
                        <Button className="btn-icon btn-simple" color="success" size="sm">
                            <i className="fa fa-edit"></i>
                        </Button>{` `}
                        <Button className="btn-icon btn-simple" color="danger" size="sm">
                            <i className="fa fa-times" />
                        </Button>{` `}
                    </td>
                </tr>
                <tr>
                    <td></td><td></td><td></td><td></td><td></td>
                    <td className="text-right">
                        <Button className="btn-round"
                                color="primary"
                                type="button"
                                to="/insert-codeBoard-page" tag={Link}>
                            방 개설
                        </Button>
                    </td>
                </tr>
                </tbody>
            </Table>

        </>
);
}
