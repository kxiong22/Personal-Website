import React from 'react';

class Projects extends React.Component {
    renderProject(className, projectName, projectDesc, projectLinkName, projectRef) {
        return (
            <div className = "col-5">
                <div className = "class-name">{className}</div>
                <div className = "project-title-container">
                    <span className="final-project-title">{projectName}</span>: {projectDesc}
                </div>
                <div>
                    <a className="final-project-link" target="_blank" href={projectRef}>{projectLinkName}</a>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className = "projects-container">
                <div className = "section-title">projects</div>
                <div className="sub-section-title">i've taken a lot of cool classes over the years</div>
                <div className = "row justify-content-center">
                    {this.renderProject(
                        "6.170 Software Studio",
                        "Raft",
                        "A website to connect communities",
                        "Video",
                        "https://drive.google.com/file/d/1D4ephEzGgG_fqhSLqFEiu6SoO4pzKEn9/view?usp=sharing"
                    )}
                    {this.renderProject(
                        "MAS.863 How to Make (Almost) Anything",
                        "Projects",
                        "Every week was a different cool project :)",
                        "Documentation",
                        "http://fab.cba.mit.edu/classes/863.21/EECS/people/katherine/index.html"
                    )}
                </div>
                <div className = "row justify-content-center">
                    {this.renderProject(
                        "21M.385 Interactive Music Systems",
                        "Beat-Boxer",
                        "A karate music rhythm game",
                        "Video",
                        "https://drive.google.com/file/d/1OK17rgkgRLVteq_VmrabuI3PWsjBNW79/view?usp=sharing"  
                    )}
                    {this.renderProject(
                        "6.835 Intelligent Multimodal User Interfaces",
                        "Virtual Rage Cage",
                        "Release your rage in a a safe and contained manner",
                        "Video",
                        "https://www.youtube.com/watch?v=angT3s0ER0Y&ab_channel=KatherineXiong"
                    )}
                </div>
                <div className = "row justify-content-center">
                    {this.renderProject(
                        "6.08 Interconnected Embedded Systems",
                        "Music Sync Lights",
                        "An end-to-end LED light system that can automatically sync to music or be programmed on a user interface",
                        "Video",
                        "https://www.youtube.com/watch?v=vCCKnwrtTOI"
                    )}
                    {this.renderProject(
                        "6.4212 Robotic Manipulation",
                        "Robot Whack-a-Mole Player",
                        "A robot that plays Whack-a-Mole",
                        "Video",
                        "https://www.youtube.com/watch?v=FfJWKTg6WFI"
                    )}
                </div>
            </div>
        )
    }
}

export default Projects