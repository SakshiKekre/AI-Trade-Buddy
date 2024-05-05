import React from "react";



const Sidebar = () => {


    return(
        <div className="sidebar">
            <a href="/" className="logo">
                <img src="" alt=""/>
                <span> Trade Buddy </span>
            </a>

            <ul className="side-menu">
                <li>
                    <a href="/profile" >
                        <i class="bx bx-user">User Profile</i>
                    </a>
                </li>
                <li>
                    <a href="/metrics" >
                        <i class="bx bx-bar-chart">Metrics</i>
                    </a>
                </li>
                <li>
                    <a href="/chat" >
                        <i class="bx bxs-dashboard">Ask Trade-Bot</i>
                    </a>
                </li>
                <li>
                    <a href="/trade" >
                        <i class="bx bx-cog">Trading Platform</i>
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default Sidebar