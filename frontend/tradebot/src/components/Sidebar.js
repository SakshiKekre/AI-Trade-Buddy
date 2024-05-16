import React from "react";
import './Sidebar.css'; // Assuming your CSS file is named Sidebar.css

const Sidebar = () => {
    return(
        <div className="sidebar">
            <a href="/" className="logo">
                {/* Assume a placeholder logo image */}
                <img src="/trade-buddy-logo.webp" alt="Trade Buddy Logo"/>
            </a>

            <ul className="side-menu">
                <li>
                    <a href="/profile">
                        <i className="bx bx-user"></i>
                        User Profile
                    </a>
                </li>
                <li>
                    <a href="/metrics">
                        <i className="bx bx-bar-chart"></i>
                        View Portfolio
                    </a>
                </li>
                <li>
                    <a href="/chat">
                        <i className="bx bxs-dashboard"></i>
                        Ask Trade-Bot
                    </a>
                </li>
                <li>
                    <a href="/trade">
                        <i className="bx bx-cog"></i>
                        Trade Recommendations
                    </a>
                </li>
                <li>
                    <a href="/trade">
                        <i className="bx bxs-hot"></i>
                        Rebalance Portfolio 
                    </a>
                </li>
                <li>
                    <a href="/testing">
                        <i className="bx bxs-hot"></i>
                        Testing Results
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
