import * as React from "react"
import data from "../../Services/data.json";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Greeting.css";
import {Button} from "@mui/material";
import {Fade} from "react-awesome-reveal";

/**
 * Greeting component.
 */
export default function Greeting() {
    return (
        <Fade triggerOnce>
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1 className="greeting-text">
                                {data.name}
                            </h1>
                            <h2 className="greeting-nickname">
                                {data.position}
                            </h2>
                            <p className="greeting-text-p subTitle">
                                {data.headline}
                            </p>
                            <SocialMedia/>
                            <Button
                                variant="contained"
                                onClick={() => window.open(data.resume)}
                                startIcon={<i className="fas fa-paperclip"/>}
                            >
                                See My Resume
                            </Button>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <img
                            alt="Greeting Image"
                            src={require(`../../Assets/images/${data.homeImagePath}`)}
                        ></img>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
