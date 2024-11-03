import React, { useState } from 'react';
import '.\ProfileCard.css';

const ProfileCard = () => {
  const [activeSection, setActiveSection] = useState('#about');

  return (
    <div className="card" data-state={activeSection}>
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage: "url('https://www.color-hex.com/palettes/98193.png')",
          }}
        ></div>
        <img
          className="card-avatar"
          src="Lead_photo_crop_center.jpg"
          alt="avatar"
        />
        <h1 className="card-fullname">Anushree Dahiya</h1>
        <h2 className="card-jobtitle">CSE | GDSC Cloud Co-Lead</h2>
      </div>

      <div className="card-main">
        {activeSection === '#about' && (
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">
                I'm an enthusiastic person who likes to learn new things, be it
                in development or creativity. My goal is to use the practical
                knowledge that I have to create new and exciting applications.
                Looking forward to teaming up with new people and learning new
                things together.
              </p>
            </div>
            <div className="card-social">
              <a href="https://github.com/anushreedahiya" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/anushree-dahiya-99382827a/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        )}

        {activeSection === '#education' && (
          <div className="card-section is-active" id="education">
            <div className="card-content">
              <div className="card-subtitle">Educational Details</div>
              <div className="card-timeline">
                <div className="card-item" data-year="2024">
                  <div className="card-item-title">
                    BTech <span>2022-26</span>
                  </div>
                  <div className="card-item-desc">
                    Symbiosis Institute of Technology, Pune <br />
                    B. Tech in Computer Science and Engineering <br />
                    (CGPA 8.29)
                  </div>
                </div>
                <div className="card-item" data-year="2022">
                  <div className="card-item-title">
                    Intermediate Schooling <span>2022</span>
                  </div>
                  <div className="card-item-desc">
                    Scholars Rosary Senior Secondary School
                    <br />
                    Higher Secondary Certificate
                    <br /> 94.4%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === '#projects' && (
          <div className="card-section is-active" id="projects">
            <div className="card-content">
              <div className="card-subtitle">Project Details</div>
              <div className="card-timeline">
                <div className="card-item" data-year="2024">
                  <div className="card-item-title">
                    <a
                      href="https://github.com/anushreedahiya/Skin-disease-recognition"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'black', textDecoration: 'none' }}
                    >
                      Skin Disease recognition using Machine Learning (ML) | ML,
                      Python
                    </a>
                    <span> February 2024</span>
                  </div>
                  <div className="card-item-desc">
                    Developed an effective code using CNN model which gave an
                    accuracy of 90.49%. Enhanced the efficiency of image
                    analysis from 83.84%. Computational time was 6.4 seconds.
                    <br />
                    Used libraries like: TensorFlow, NumPy, Keras.
                  </div>
                </div>
                {/* Add other project items similarly */}
              </div>
            </div>
          </div>
        )}

        <div className="card-buttons">
          <button
            className={activeSection === '#about' ? 'is-active' : ''}
            onClick={() => setActiveSection('#about')}
          >
            About
          </button>
          <button
            className={activeSection === '#education' ? 'is-active' : ''}
            onClick={() => setActiveSection('#education')}
          >
            Education
          </button>
          <button
            className={activeSection === '#projects' ? 'is-active' : ''}
            onClick={() => setActiveSection('#projects')}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
