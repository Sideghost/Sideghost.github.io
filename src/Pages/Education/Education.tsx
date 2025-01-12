import * as React from "react"
import "./Education.css";
import data from "../../Services/data.json";
import DegreeCard from "../../Components/DegreeCard/DegreeCard";
import {Fade} from "react-awesome-reveal";

/**
 * Education page.
 */
export default function Education() {
    return (
        <Fade triggerOnce>
            <div className="education-main">
                <div className="basic-education">
                    <div className="heading-div">
                        <div className="heading-img-div">
                            <img
                                alt="Education"
                                src={require(`../../Assets/images/${data.education.headerImagePath}`)}
                                width={"94%"}
                            ></img>
                        </div>
                        <div className="heading-text-div">
                            <h1 className="heading-text">
                                Education
                            </h1>
                            <h3 className="heading-sub-text">
                                Qualifications and Certifications
                            </h3>
                            <p className="experience-header-detail-text subTitle">
                                {data.education.description}
                            </p>
                        </div>
                    </div>
                    <div className="main" id="educations">
                        <div className="educations-header-div">
                            <h1 className="educations-header">
                                Degrees
                            </h1>
                        </div>
                        <div className="educations-body-div">
                            {data.education.degrees.map((degree) => {
                                return <DegreeCard degree={degree} key={degree.title}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
