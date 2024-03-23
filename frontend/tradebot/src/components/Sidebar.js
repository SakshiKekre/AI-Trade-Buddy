import React from "react";



const Sidebar = () => {


    return(
        <React.Fragment>
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
                            <i class="bx bx-bar-chart">Trade Performance</i>
                        </a>
                    </li>
                    <li>
                        <a href="/chat" >
                            <i class="bx bxs-dashboard">Trade ChatBot</i>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <i class="bx bx-cog">Settings</i>
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Sidebar