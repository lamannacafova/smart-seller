import React, { useContext, useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsSend, BsMoon } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { BsSun } from "react-icons/bs";
import Home from "../../pages/Home/Home";
import Feedback from "../../pages/Feedback/Feedback";
import { Link } from "react-router-dom";
import User from "../../pages/User/User";
import Admin from "../../pages/Admin/Admin";
import Request from "../../pages/Request/Request";
import { GlobalThemeContext } from "../../context/ThemeContext";
const Panel = () => {
  const { lightTheme, darkTheme } = useContext(GlobalThemeContext);
  const [tabs, setTabs] = useState(0);
  return (
    <>
      <div className="all_part">
        <div className="logo">
          <a href="/">
            <span class="logo_1">Smart</span>
            <span class="logo_2">Sale</span>
          </a>
        </div>
        <div className="list">
          <ul>
            <li onClick={() => setTabs(0)}>
              <Link>
                <BiHomeAlt2 className="icons" />
                Home
              </Link>
            </li>
            <li onClick={() => setTabs(1)}>
              <Link>
                <BsSend className="icons" />
                Feedbacks
              </Link>
            </li>
            <li onClick={() => setTabs(2)}>
              <Link>
                <HiOutlineUsers className="icons" />
                Users
              </Link>
            </li>
            <li onClick={() => setTabs(3)}>
              <Link>
                <IoPersonOutline className="icons" />
                Roles
              </Link>
            </li>
            <li onClick={() => setTabs(4)}>
              <Link>
                <AiOutlineStar className="icons" />
                Requests
              </Link>
            </li>
          </ul>
        </div>
        <div className="part_end">
          <a href="">
            <GrLogout className="logout" />
            Sign out
          </a>
          <div className="buttons">
            <button className="light" onClick={lightTheme}>
              <BsSun className="sun_icon" />
              Light
            </button>
            <button className="dark" onClick={darkTheme}>
              <BsMoon className="moon_icon" />
              Dark
            </button>
          </div>
        </div>
      </div>

      <div className="about_panel">
        <div className="box"></div>
        {tabs === 0 && <Home />}
        {tabs === 1 && <Feedback />}
        {tabs === 2 && <User />}
        {tabs === 3 && <Admin />}
        {tabs === 4 && <Request />}
      </div>
    </>
  );
};

export default Panel;
