import "./Skills.css";
import data from "../../Services/data.json";
import * as React from "react";
import {Icon} from "@iconify/react";
import {Fade} from "react-awesome-reveal";
import {Tooltip} from "@mui/material";

/**
 * Skills component.
 */
export default function Skills() {
    return (
        <div className="main" id="skills">
            <div className="skills-header-div">
                <h1 className="skills-header">
                    Skills
                </h1>
            </div>
            <div>
                {
                    data.skills.data.map((skill) => {
                        return (
                            <Fade key={skill.title} delay={0.5}>
                                <div className="skills-main-div">
                                    <div className="skills-image-div">
                                        <img
                                            alt="Skill Image"
                                            src={require(`../../Assets/images/${skill.imagePath}`)}
                                            width={"80%"}
                                        ></img>
                                    </div>

                                    <div className="skills-text-div">
                                        <h1 className="skills-heading">
                                            {skill.title}
                                        </h1>
                                        <SoftwareSkills softwareSkills={skill.softwareSkills}/>
                                        <div>
                                            {skill.skills.map((skillSentence) => {
                                                return (
                                                    <p className="subTitle skills-text" key={skillSentence}>
                                                        {skillSentence}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        );
                    })
                }
            </div>
        </div>
    );
}

export interface SoftwareSkill {
    skillName: string;
    icon: string;
    style: object;
}

export interface SoftwareSkillsProps {
    softwareSkills: SoftwareSkill[];
}

/**
 * Software skills component.
 *
 * @param softwareSkills Software skills.
 */
export function SoftwareSkills({softwareSkills}: SoftwareSkillsProps) {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {softwareSkills.map((skill) => {
                        return (
                            <Tooltip title={skill.skillName} placement="top" key={skill.skillName}>
                                <li className="software-skill-inline">
                                    <Icon icon={skill.icon} style={skill.style}/>
                                </li>
                            </Tooltip>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}