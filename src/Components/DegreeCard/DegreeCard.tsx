import React from "react";
import "./DegreeCard.css";
import {Fade, JackInTheBox} from "react-awesome-reveal";
import {Button} from "@mui/material";

function DegreeCard({degree}) {
    return (
        <Fade delay={0.5}>
            <div className="degree-card">
                {degree.logoPath && (
                    <JackInTheBox delay={0.5} triggerOnce>
                        <div className="card-img">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    transform: "scale(0.9)",
                                }}
                                src={require(`../../Assets/images/${degree.logoPath}`)}
                                alt={degree.title}
                            />
                        </div>
                    </JackInTheBox>
                )}
                <div
                    className="card-body"
                    style={{width: degree.logoPath ? "90%" : "100%"}}
                >
                    <div className="body-header">
                        <div className="body-header-title">
                            <h2 className="card-title">
                                {degree.title}
                            </h2>
                            <h3 className="card-subtitle">
                                <i className="fas fa-map-marker-alt"/> {degree.subtitle}
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration">
                                {degree.duration}
                            </h3>
                            {degree.url && (
                                <Button
                                    className="duration"
                                    variant="contained"
                                    size="small"
                                    onClick={() => window.open(degree.url)}
                                    startIcon={<i className="fas fa-external-link-alt fa-2xs"></i>}
                                >
                                    Website
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="body-content">
                        {degree.description.map((sentence) => {
                            return (
                                <p className="content-list" key={sentence}>
                                    {sentence}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default DegreeCard;
