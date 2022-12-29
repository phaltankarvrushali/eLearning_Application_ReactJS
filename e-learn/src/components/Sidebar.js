import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import ProfileImage from "../ProfilePicture.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { AiFillHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import "./navbar.scss";

import {
  RiUserSettingsFill,
  RiMessage2Fill,
  RiInformationFill,
} from "react-icons/ri";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);

  const { user } = useUserAuth();

  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  const Links = [
    {
      title: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      title: "Course Catalog",
      icon: <ImBooks />,
      path: "/courses",
    },
    {
      title: "Assessment",
      icon: <FaBookReader />,
      path: "/Assessment",
    },
    {
      title: "Lecture Notes",
      icon: <IoMdCart />,
      path: "/LectureNotes",
    },
    // {
    //   title: "Progress",
    //   icon: <RiUserSettingsFill />,
    //   path: "/settings",
    // },
    {
      title: "Blogs",
      icon: <RiMessage2Fill />,
      path: "/blog",
    },
    {
      title: "About the Contributor",
      icon: <RiInformationFill />,
      path: "/about",
    },
  ];

  return (
    <>
      <div id="menu-btn" className="menu-button" onClick={ShowSidebar}>
        =
      </div>
      <div
        className={sidebar ? "sidebar active-sidebar" : "sidebar"}
        onClick={ShowSidebar}
      >
        <div className="row">

          <div className="center">
            {/* <div className="user">Welcome {user && user.displayName}</div> */}
            <div className="user">Welcome &nbsp; {user && user.email}</div>

           
          </div>
        </div>
        <hr className="sidebar-hr" />
        <ul className="row">
          {Links.map((item, index) => {
            return (
              <Link to={item.path} key={index} className="sidebar-link">
                <li>
                  {item.icon}
                  {item.title}
                </li>
              </Link>
            );
          })}
          <div className="sidebar-link">
            <li>{CheckUser(user) ? <LogoutButton /> : <></>}</li>
          </div>
        </ul>
      </div>
    </>
  );
}
