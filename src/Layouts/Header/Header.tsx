import React from "react";
import "./Header.css";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import data from "../../Services/data.json";
import {WebUiUris} from "../../Pages/WebUiUris";
import {Fade} from "react-awesome-reveal";
import {Button} from "@mui/material";

/**
 * Header component.
 */
export default function Header() {
    return (
        <Fade triggerOnce>
            <header className="header">
                <NavLink className="logo" to={WebUiUris.HOME}>
                    <span> &lt;</span>
                    <span className="logo-name">{data.logoName}</span>
                    <span>/&gt;</span>
                </NavLink>
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li><MyNavLink
                        to={WebUiUris.HOME}
                        text={"Home"}
                        icon={"fas fa-home"}
                    /></li>
                    <li><MyNavLink
                        to={WebUiUris.EDUCATION}
                        text={data.education.title}
                        icon={data.education.icon}
                    /></li>
                    <li><MyNavLink
                        to={WebUiUris.EXPERIENCE}
                        text={data.experience.title}
                        icon={data.experience.icon}
                    /></li>
                    <li><MyNavLink
                        to={WebUiUris.PORTFOLIO}
                        text={data.portfolio.title}
                        icon={data.portfolio.icon}
                    /></li>
                    <li><MyNavLink
                        to={WebUiUris.ABOUT}
                        text={data.about.title}
                        icon={data.about.icon}
                    /></li>
                </ul>
            </header>
        </Fade>
    );
};


/**
 * Properties for MyNavLink component.
 *
 * @param to link to
 * @param text link text
 * @param icon link icon
 */
interface MyNavLinkProps {
    to: string;
    text: string;
    icon: string;
}

/**
 * MyNavLink component.
 */
function MyNavLink({to, text, icon}: MyNavLinkProps) {
    const path = useLocation().pathname;
    const navigate = useNavigate();

    return (
        <Button
            variant={path == to ? "outlined" : "text"}
            onClick={() => navigate(to)}
            startIcon={<i className={icon}/>}
            style={{
                marginRight: "10px"
            }}
        >
            {text}
        </Button>
    );
}
