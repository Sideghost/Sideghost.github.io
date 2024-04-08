import * as React from "react"
import data from "../../Services/data.json";
import "./Portfolio.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import {Fade} from "react-awesome-reveal";
import {Button} from "@mui/material";

/**
 * Portfolio page.
 */
export default function Portfolio() {
    return (
        <Fade triggerOnce>
            <div className="projects-main">
                <div className="basic-projects">
                    <div className="projects-heading-div">
                        <div className="projects-heading-img-div">
                            <img
                                src={require(`../../Assets/images/${data.portfolio.headerImagePath}`)}
                                alt="Portfolio"
                                width={"85%"}
                            />
                        </div>
                        <div className="projects-heading-text-div">
                            <h1 className="projects-heading-text">
                                {data.portfolio.title}
                            </h1>
                            <h3 className="experience-heading-sub-text">
                                {data.portfolio.subtitle}
                            </h3>
                            <p className="projects-header-detail-text subTitle">
                                {data.portfolio.description}
                            </p>
                            <Button
                                variant="contained"
                                onClick={() => window.open(data.github)}
                                startIcon={<i className="fab fa-github"/>}
                            >
                                More Projects
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="main" id="educations">
                    <div className="educations-header-div">
                        <h1 className="educations-header">
                            Projects
                        </h1>
                    </div>
                    <div className="educations-body-div">
                        {data.portfolio.projects.map((project) => {
                            return <ProjectCard project={project} key={project.title}/>;
                        })}
                    </div>
                </div>

                {data.portfolio.publications.length > 0 ? (
                    <div className="basic-projects">
                        <div className="publications-heading-div">
                            <div className="publications-heading-text-div">
                                <h1 className="publications-heading-text">
                                    Publications and Research Papers
                                </h1>
                            </div>
                        </div>
                    </div>
                ) : null}

                {/* TODO: Publications <div className="repo-cards-div-main">
                {data.publications.publications.map((pub) => {
                    return <PublicationCard pub={pub}/>;
                })}
            </div>*/}
            </div>
        </Fade>
    );
}
