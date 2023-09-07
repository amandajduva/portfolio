import { useState } from "react";
import pdf from "../assets/portfolio-resume.pdf";

export default function Resume() {
    const [showPDF, setShowPDF] = useState(false);
    const toggle = () => {
        setShowPDF(!showPDF);

    }
    return (
        <>
            <h6 className="text-center" id="resume-link">
                ⭐️ Toggle to print or download my {" "} <a href="#resume-pdf" onClick={toggle} className="text-decoration-none">resume ⭐️</a>
            </h6>
            {showPDF ? (
                <div className="w-100">
                    <object aria-label="pdf resume" width="100%" height="800" data={pdf} type="application/pdf" />
                </div>
            ) : (
                <div className="resume">
                    <h4>My proficiencies:</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>JavaScript</li>
                        <li>Web, Third-Party, and Server-Side APIs</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>MySQL</li>
                        <li>Object-Relational Mapping</li>
                        <li>MongoDB</li>
                        <li>Model-View-Controller</li>
                        <li>MERN Stack</li>
                        <li>Progressive Web Applications</li>
                        <li>Object Oriented Programming</li>
                        <li>Agile Development</li>
                    </ul>
                </div>
            )}

        </>
    );
}