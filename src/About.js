import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopIcon from '@mui/icons-material/Laptop';
import FlightIcon from '@mui/icons-material/Flight';
import MailIcon from '@mui/icons-material/Mail';

class About extends React.Component {
    renderBulletPoint(icon, iconLabel, text, subtext = "") {
        return (
            <div className = "bullet-point">
                {icon}
                <span className = "icon-label">{iconLabel}</span>
                <div>{text}</div>
                <div className = "sub-text">{subtext}</div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div id = "intro-container" className = "parallax">
                    <div id = "intro-words">
                        <div id = "hi">Hi, I'm</div>
                        <div id = "profile-name">Katherine Xiong</div>
                    </div>
                </div>

                <div id = "about-me-container">
                    <hr
                        style={{
                        background: "#A0A0A0",
                        height: "2px",
                        border: "none",
                        opacity: 1,
                        marginLeft: "200px",
                        marginRight: "200px",
                        }}
                    />
                    <div className = "section-title">about me</div>
                    {/* <a href = "./KatherineXiongResume.pdf" className = "btn btn-outline-info" download>Download Resume</a> */}
                    {this.renderBulletPoint(
                        <SchoolIcon/>,
                        " Education",
                        "Massachusetts Institute of Technology",
                        "B.S., M.Eng. Computer Science (2022, 2023)"
                    )}
                    {this.renderBulletPoint(
                        <LocationOnIcon/>,
                        " Home",
                        "Plano, Texas"
                    )}
                    {this.renderBulletPoint(
                        <LaptopIcon/>,
                        " Programming Skills",
                        "Python | Java | React | PyTorch/Tensorflow"
                    )}
                    {this.renderBulletPoint(
                        <FlightIcon/>,
                        " Hobbies",
                        "Crosswords | Crochet | Painting"
                    )}
                    {this.renderBulletPoint(
                        <MailIcon/>,
                        " Contact",
                        // <div>
                        //     <a className = "contact-img btn btn-link" href = "https://www.facebook.com/katherine.xiong.14" role = "button" style = {{color: "black"}}>
                        //     Facebook 
                        //     </a>
                        //     /
                        //     <a className = "contact-img btn btn-link" href = "https://www.linkedin.com/in/katherine-xiong-ba1241171?trk=profile-badge" role = "button" style = {{color: "black"}}>
                        //     Linkedin
                        //     </a>
                        //     /
                        //     <a className = "contact-img btn btn-link" href = "mailto:kxiong22@mit.edu" role = "button" style = {{color: "black"}}>
                        //     Email
                        //     </a>
                        // </div>
                        <div>
                            <a className = "btn btn-link" href = "https://www.facebook.com/katherine.xiong.14" role = "button">
                                <img className = "contact-img" src = "https://cdn.iconscout.com/icon/free/png-256/facebook-2038470-1718513.png"/>
                            </a>
                            <a className = "btn btn-link" href = "https://www.instagram.com/katherine_xiong52" role = "button">
                                <img className = "contact-img" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
                            </a>
                            <a className = "btn btn-link" href = "https://www.linkedin.com/in/katherine-xiong-ba1241171?trk=profile-badge" role = "button">
                                <img className = "contact-img" src = "https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
                            </a>
                            <a className = "btn btn-link" href = "mailto:kxiong22@mit.edu" role = "button">
                                <img className = "contact-img" src = "https://www.shareicon.net/data/256x256/2016/07/08/117553_email_512x512.png"/>
                            </a>
                        </div>
                    )}
                    <hr
                        style={{
                        background: "#A0A0A0",
                        height: "2px",
                        border: "none",
                        opacity: 1,
                        marginLeft: "200px",
                        marginRight: "200px",
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default About