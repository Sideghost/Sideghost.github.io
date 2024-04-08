import React from "react";
import "./ExperienceCard.css";
import {Fade, JackInTheBox} from "react-awesome-reveal";
import {Button} from "@mui/material";

function ExperienceCard({experience}) {
    return (
        <Fade delay={0.5}>
            <div className="experience-card">
                {experience.company.logoPath && (
                    <JackInTheBox delay={0.5} triggerOnce>
                        <div className="card-img">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    transform: "scale(0.9)",
                                }}
                                src={require(`../../Assets/images/${experience.company.logoPath}`)}
                                alt={experience.company}
                            />
                        </div>
                    </JackInTheBox>
                )}
                <div
                    className="card-body"
                    style={{width: experience.logoPath ? "90%" : "100%"}}
                >
                    <div className="body-header">
                        <div className="body-header-title">
                            <h2 className="card-title">
                                {experience.title}
                            </h2>
                            <h3 className="card-subtitle">
                                <i className="fas fa-map-marker-alt"/> {experience.company.name}
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration">
                                {experience.duration}
                            </h3>

                            {experience.company.url && (
                                <Button
                                    className="duration"
                                    variant="contained"
                                    size="small"
                                    onClick={() => window.open(experience.company.url)}
                                    startIcon={<i className="fas fa-external-link-alt fa-2xs"></i>}
                                >
                                    Website
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="body-content">
                        {experience.descriptions.map((sentence) => {
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

export default ExperienceCard;
