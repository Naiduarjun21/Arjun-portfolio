import React from 'react';
import './styles/Projects.css';

function Projects() {
    const projectList = [
        {
            name: "Breast Cancer Detection",
            description: "AI মডেল ব্যবহার করে স্তন ক্যান্সার শনাক্ত করার পদ্ধতি।",
            liveDemo: "https://example.com/demo",
            sourceCode: "https://github.com/arjun/breast-cancer-detection",
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>প্রজেক্টসমূহ</h2>
            {projectList.map((project, index) => (
                <div key={index} className="project">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
                    <a href={project.sourceCode} target="_blank" rel="noreferrer">Source Code</a>
                </div>
            ))}
        </section>
    );
}

export default Projects;