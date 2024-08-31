import React from 'react';
import '../App.css'; // Import the updated CSS file

const About = () => (
  <main className="about-main">
    <section className="about-section">

      <h2>Skills</h2>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frontend Web Development</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>Backend Web Development</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>C</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Intermediate</td>
          </tr>
        </tbody>
      </table>

      <br />

      <button onClick={() => window.open('path/to/your/resume.pdf')}>Download Resume</button>
      <a href="/"><button>Go Back</button></a>
    </section>
  </main>
);

export default About;
