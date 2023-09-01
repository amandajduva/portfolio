import React from "react";
import updatedPhoto from "../../assets/updated-photo.png"

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <p>
                Hello, my name is Amanda Duva and I am a web developer. I graduated from University of Central Florida with a Bachelor of Science in English Language Arts Education. I started off my professional life as a high school teacher. After three years as an educator, I attended a coding bootcamp through UCF to earn a certificate and to become the web devloper that I am today!
            </p>
            <img src={updatedPhoto} alt="profile" />
        </div>
    );
}

export default About;