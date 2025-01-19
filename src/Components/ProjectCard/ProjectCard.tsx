import React from "react";
import "./ProjectCard.css";
import "../Skills/Skills.css";
import {Fade, JackInTheBox} from "react-awesome-reveal";
import {Button, Tooltip} from "@mui/material";
import {Icon} from "@iconify/react";

function ProjectCard({project}) {
    return (
        <Fade delay={0.5}>
            <div className="project-card">
                {project.logoPath && (
                    <JackInTheBox delay={0.5} triggerOnce>
                        <div className="card-img">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    transform: "scale(0.9)",
                                }}
                                src={require(`../../Assets/images/${project.logoPath}`)}
                                alt={project.title}
                            />
                        </div>
                    </JackInTheBox>
                )}
                <div
                    className="card-body"
                    style={{width: project.logoPath ? "90%" : "100%"}}
                >
                    <div className="body-header">
                        <div className="body-header-title">
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <h3 className="card-subtitle">
                                {project.position}
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration">
                                {project.duration}
                            </h3>

                            {project.url && (
                                <Button
                                    className="duration"
                                    variant="contained"
                                    size="small"
                                    onClick={() => window.open(project.url)}
                                    startIcon={<i className="fas fa-external-link-alt fa-2xs"></i>}
                                >
                                    Project
                                </Button>
                            )}

                            {project.clientUrl && (
                                <Button
                                    className="duration"
                                    variant="contained"
                                    size="small"
                                    onClick={() => window.open(project.clientUrl)}
                                    startIcon={<i className="fas fa-external-link-alt fa-2xs"></i>}
                                    style={{ margin: "8px 0" }}
                                >
                                    Client Website
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="project-body-content">
                        <div style={{
                            height: "60px"
                        }}>
                            <ul className="dev-icons">
                                {project.technologies.map((skill) => {
                                    return (
                                        <Tooltip title={skill.skillName} placement="top" key={skill.skillName}>
                                            <span>
                                                <li className="software-skill-inline">
                                                    <Icon icon={skill.icon} style={skill.style}/>
                                                </li>
                                            </span>
                                        </Tooltip>
                                    );
                                })}
                            </ul>
                        </div>
                        <p className="project-content-list">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default ProjectCard;
