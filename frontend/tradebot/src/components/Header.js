import React from "react";
// import { Link } from "react-router-dom";
// import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
// import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  const loggedIn = localStorage.getItem('isLoggedIn');

  return (
    <React.Fragment>
        <div class="content">
        <nav>
        <i class="bx_bx-menu"></i>
        <form action="#">
        <input type="search" placeholder="Search.."/>
        <button type="submit"><i class="bx bx-search"></i></button>
        </form>
        <a href="#" class="notification">
        <i class="bx_bx-bell"></i>
        <span>12</span>
        </a>
        <a href="#" class="profile">
        <img src="./img/logo-1.png"
        alt=""/>
        </a>
        </nav>
        </div>

    </React.Fragment>
  );
};
export default Header;
