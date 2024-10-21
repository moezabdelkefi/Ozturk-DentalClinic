import React from 'react';
import SocialShare from '../others/SocialShare';
import CountUp from 'react-countup';
import { HashLink as Link } from 'react-router-hash-link';



const TeamDetailsContent = ({ teamInfo }) => {
    const { thumb, name, profession, memberInfo, projectCount, contactNumber } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding-top">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-xl-6 left-info">
                                <div className="thumb">
                                    <img src={`/img/team/${thumb}`} alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="team-right-info bg-dark text-light">
                                    <h2>{name}</h2>
                                    <span>{profession}</span>
                                    <p>{memberInfo}</p>
                                    <div className="team-experience mt-30">
                                        <div className="fun-fact">
                                            <div className="counter">
                                                <div className="timer">
                                                    <CountUp end={projectCount} duration={3} />
                                                </div>
                                                <div className="operator">+</div>
                                            </div>
                                            <span className="medium">experience</span>
                                        </div>
                                    </div>
                                    
                                    <div className="social">
                                        <Link className="btn circle btn-sm btn-gradient animation" to="/contact-us#">Contact Me</Link>
                                        <div className="share-link">
                                            <i className="fas fa-share-alt"></i>
                                            <ul>
                                                <SocialShare />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </>
    );
};

export default TeamDetailsContent;