import React from "react";
import "./Footer.css";
import Typography from "@mui/material/Typography";
import data from "../../Services/data.json";

/**
 * Footer component.
 */
export default function Footer() {
    return (
        <div className="footer-div">
            <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                className="footer-text"
                gutterBottom
            >
                Made with <span role="img">❤️</span> by {data.name}
            </Typography>
        </div>
    )
}