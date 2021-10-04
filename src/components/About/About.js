import React from 'react';
import './About.css'

const About = () => {
    const imgLink = `https://web.dev/images/headers/about.svg`;
    return (
        <>
            <div className="about-container">
                <div>
                    <h2>About LIVE & LEARN</h2>
                    <p>Live And Learn is an Bangladeshi massive open online course (MOOC) provider aimed at professional adults and students. It was founded in May 2021.</p>
                    <h3>About Our Course</h3>
                    <p>Our course is designed to start you on a path toward future studies in web development and design, no matter how little experience or technical knowledge you currently have. </p>
                    <p>The web is a very big place, and if you are the typical internet user, you probably visit several websites every day, whether for business, entertainment or education. </p>
                    <p>But have you ever wondered how these websites actually work? How are they built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to build a website? With almost 1 billion websites now on the internet, the answers to these questions could be your first step toward a better understanding of the internet and developing a new set of internet skills.</p>
                </div>
                <div>
                    <img src={imgLink} alt="" />
                </div>
            </div>
            <div className="video-section-container">
                <h2 >Our Course Review</h2>
                <div className="about-video-section">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R-o-2XAjVCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/H4jPgMLfn40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>

        </>
    );
};

export default About;