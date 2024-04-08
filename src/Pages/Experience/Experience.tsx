import * as React from "react"
import data from "../../Services/data.json";
import "./Experience.css";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import {Fade} from "react-awesome-reveal";

/**
 * Experience page.
 */
export default function Experience() {
    return (
        <Fade triggerOnce>
            <div className="experience-main">
                <div className="basic-experience">
                    <div className="experience-heading-div">
                        <div className="experience-heading-img-div">
                            <img
                                src={require(`../../Assets/images/${data.experience.headerImagePath}`)}
                                alt="Experience"
                                width={"85%"}
                            />
                        </div>
                        <div className="experience-heading-text-div">
                            <h1 className="experience-heading-text">
                                {data.experience.title}
                            </h1>
                            <h3 className="experience-heading-sub-text">
                                {data.experience.subtitle}
                            </h3>
                            <p className="experience-header-detail-text subTitle">
                                {data.experience.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="main" id="educations">
                    <div className="educations-body-div">
                        {data.experience.experiences.map((experience) => {
                            return <ExperienceCard experience={experience} key={experience.title}/>;
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    )
}
