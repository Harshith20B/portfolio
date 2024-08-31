import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming separate CSS for the Home component

const Home = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <main className="home-main">
      <section className="intro-section">
        <h1 className="intro-heading">I am <span className="name-highlight">Harshith</span></h1>
        <h2 className="role">Web Designer | Java Developer</h2>
        <p className="intro-description">
          I am currently a student at Ramaiah Institute of Technology, pursuing a Bachelor's degree in Information Science. My academic journey has fueled my passion for Data Science, Web Development, and Artificial Intelligence. As an open-minded individual, I embrace challenges and continually seek opportunities for growth.
        </p>
        <button className="about-button" onClick={handleAboutClick}>About Me</button>
      </section>
      {/* <div className="stats">
        <div className="stat-item">
          <span className="stat-number">3</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">20</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">15</span>
          <span className="stat-label">Clients</span>
        </div>
      </div> */}
    </main>
  );
};

export default Home;
