import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <div>
      <section className="teamSection containar">
        <div className="title">
          <h2>OUR TEAM</h2>
          <p>
            Patients recieve primary care from a doctor of internal medicine and
            support team who specialize in the prevention and treatment of adult
            diseases
          </p>
        </div>
        <div className="parentTeam">
          <div className="teamChildOne">
            <img src="./photos/team1.jpg" alt="product one" className="img" />
            <h4>Dr. Kenneth Hale</h4>
            <p>Medical Director</p>
          </div>

          <div className="teamChildOne">
            <img src="./photos/team2.jpg" alt="product one" className="img" />
            <h4>Dr. Aoron Weir</h4>
            <p>Medical Director</p>
          </div>

          <div className="teamChildOne">
            <img src="./photos/team3.jpg" alt="product one" className="img" />
            <h4>Dr. Md Ashraful Islam</h4>
            <p>Medical Director</p>
          </div>

          <div className="teamChildOne">
            <img src="./photos/team4.jpg" alt="product one" className="img" />
            <h4>Dr. Shawn Cole</h4>
            <p>Medical Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
