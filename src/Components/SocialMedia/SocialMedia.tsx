import * as React from "react"
import data from "../../Services/data.json";
import "./SocialMedia.css"
import {Tooltip} from "@mui/material";

/**
 * Social media component.
 */
export default function SocialMedia() {
    return (
        <div className="social-media-div">
            {data.contacts.data.map((media) => {
                return (
                    <Tooltip title={media.name} placement="top" key={media.name}>
                        <a
                            href={media.url}
                            className={`icon-button`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className={media.fontAwesomeIcon}
                                style={{backgroundColor: media.backgroundColor}}
                            ></i>
                        </a>
                    </Tooltip>
                );
            })}
        </div>
    )
}
