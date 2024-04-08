import * as React from "react"
import {Fade} from "react-awesome-reveal";
import data from "../../Services/data.json";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import {Button} from "@mui/material";
import "./About.css";

/**
 * About page.
 */
export default function About() {
    return (
        <div className="contact-main">
            <div className="basic-contact">
                <Fade triggerOnce>
                    <div className="contact-heading-div">
                        <div className="contact-heading-img-div">
                            <img
                                src={require(`../../Assets/images/${data.about.headerImagePath}`)}
                                alt={data.about.title}
                                style={{
                                    width: "400px",
                                    height: "400px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    border: "2px solid #fff",
                                }}
                            />
                        </div>
                        <div className="contact-heading-text-div">
                            <h1 className="contact-heading-text">
                                {data.about.title}
                            </h1>
                            <p className="contact-header-detail-text subTitle">
                                {data.about.description}
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
                </Fade>
                <Fade>
                    <div className="hobbies-heading-div">
                        <div className="hobbies-heading-text-div">
                            <h1 className="blog-heading-text">
                                {data.about.hobbies.title}
                            </h1>
                            <p className="blog-header-detail-text subTitle">
                                {data.about.hobbies.description}
                            </p>
                            {data.about.hobbies.hobbies.map((hobby) => {
                                return (
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: "100%",
                                        maxHeight: "60px",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        marginTop: 0,
                                        marginBottom: 0
                                    }} key={hobby.title}>
                                        <i className={hobby.icon}/> <p className="hobby-heading-text">{hobby.title}</p>
                                        <p className="subTitle">{hobby.description}</p>
                                    </div>
                                );
                            })}

                        </div>
                        <div className="blog-heading-img-div">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    transform: "scale(0.9)",
                                }}
                                src={require(`../../Assets/images/${data.about.hobbies.logoPath}`)}
                                alt={data.about.hobbies.title}
                            />
                        </div>
                    </div>
                </Fade>
                <Fade>
                    <div className="address-heading-div">
                        <div className="contact-heading-img-div">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    transform: "scale(0.9)",
                                }}
                                src={require(`../../Assets/images/${data.about.contact.logoPath}`)}
                                alt={data.about.contact.title}
                            />
                        </div>
                        <div className="address-heading-text-div">
                            <h1 className="blog-heading-text">
                                {data.about.contact.title}
                            </h1>
                            <p className="contact-header-detail-text subTitle">
                                {data.about.contact.description}
                            </p>
                            <h1 className="address-heading-text">
                                <i className="fas fa-envelope"/> <a
                                href={"mailto:" + data.about.contact.email}
                                style={{color: "inherit", textDecoration: "none"}}
                            >
                                {data.about.contact.email}
                            </a>
                            </h1>
                            <p className="contact-header-detail-text subTitle">
                                <i className="fas fa-phone-alt"/> {data.about.contact.phone}
                            </p>
                            <div className="address-btn-div">
                                <Button
                                    variant="contained"
                                    className="project-btn"
                                    onClick={() => window.open(data.about.contact.addressLink)}
                                    startIcon={<i className="fas fa-map-marker-alt"/>}
                                >
                                    Visit on Google Maps
                                </Button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
