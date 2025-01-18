import React from 'react';
import Logo from "../assets/logo.svg"
import UserIcon from "../assets/user.svg"
import {NavLink} from "react-router";

const Header = () => {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                left: "50%",
                transform: "translateX( -50%)",
                width: "100%",
            }}
            className={"flex bg-transparent fixed top-0 pt-[38px] w-full text-white   justify-between items-center"}>
            <div className={"flex items-center gap-[70px]"}>
                <img src={Logo} alt="Logo"/>
                <NavLink to="/">Home</NavLink>
            </div>

            <div className={"flex items-center gap-[70px]"}>
                <p>EN</p>
                <p>
                    <img src={UserIcon} alt="user icon"/>
                </p>
            </div>
        </div>
    );
};

export default Header;
