import React from 'react';

const Projects = () => (
  <main>
    <section className="about-section">
      <h2 className="projects-title">My Projects</h2>
      <hr className="projects-divider" />
      <ul>
        <li className="projects-heading"><strong>Cinemate:</strong></li>
        <p className="projects">
          It is a website designed to empower users to explore, review, and rate movies and TV shows.
          With its user-friendly interface, Cinemate allows movie enthusiasts to discover new releases, 
          classics, and hidden gems. Users can contribute to the community by sharing their opinions 
          through detailed reviews and star ratings, enhancing the database's depth and relevance.
        </p>
        <br /> {/* Adding a break line between projects */}
        <li className="projects-heading"><strong>Quiz App:</strong></li>
        <p className="projects">
          A mobile application designed to enhance learning and assessment in Physics, Chemistry,
          Mathematics, and Biology. The app offers a diverse range of quizzes covering various topics
          within each subject, providing users with an interactive way to test their knowledge and
          reinforce key concepts. With a user-friendly interface and engaging quiz formats, it aims
          to make learning enjoyable and effective for students of all levels.
        </p>
      </ul>
    </section>
  </main>
);

export default Projects;
