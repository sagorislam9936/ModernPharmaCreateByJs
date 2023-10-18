import React from "react";
import "./News.css";
const News = () => {
  return (
    <div>
      <section className="newsSection containar">
        <div className="title">
          <div></div>
          <h2>NEWS AND BLOGS</h2>
          <p>
            Medical News and articles you can trust from around the world.All
            content is written and reviewed by qualified health, medical and
            scientific experts
          </p>
        </div>

        <div className="parentNews">
          <div className="newsChildOne">
            <img src="./photos/news1.webp" alt="product one" className="img" />
            <div className="date">
              <i className="fa-solid fa-calendar-days"> </i>
              <h6>24 May 21</h6>
            </div>
            <h4>The prospects for pharmacy</h4>
            <p>
              We are now on the final approach to the 21 welsh election. The
              election campaigns are in full swing...
            </p>
            <a href="#" className="read">
              Read More +
            </a>
          </div>

          <div className="newsChildOne">
            <img src="./photos/news2.webp" alt="product one" className="img" />
            <div className="date">
              <i className="fa-solid fa-calendar-days"> </i>
              <h6>24 May 21</h6>
            </div>
            <h4>RPS Elections</h4>
            <p>
              As people start to think about who to vote for in this year's
              election to the RPS National Pharmacy...
            </p>
            <a href="#" className="read">
              Read More +
            </a>
          </div>

          <div className="newsChildOne">
            <img src="./photos/news3.webp" alt="product one" className="img" />
            <div className="date">
              <i className="fa-solid fa-calendar-days"> </i>
              <h6>24 May 21</h6>
            </div>

            <h4>Communication Pharmacists</h4>
            <p>
              The largest proportion of the pharmacy workforce work in community
              pharmacy , so why is it that we do...
            </p>
            <a href="#" className="read">
              Read More +
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
