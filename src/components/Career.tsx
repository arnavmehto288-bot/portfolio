import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science Engineering</h4>
                <h5>Government Polytechnic Manesar</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Currently pursuing a diploma in Computer Science Engineering, gaining 
              fundamental skills in programming languages, computer systems, and 
              software concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Python Course (3 Months)</h4>
                <h5>GradGuru Innovations</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a 3-month comprehensive certification course focused on Python 
              programming logic, data structures, and Artificial Intelligence foundations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th Standard (High School)</h4>
                <h5>HMP Sr. Secondary School</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed high school education with a strong academic score of 74%, 
              fostering early analytical skills and a passion for technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
