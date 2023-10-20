import React from "react";
import "./Bannar.css";
const Bannar = () => {
  return (
    <div>
      <section className="bannerSection containar">
        <div className="parentBanner">
          <div className="textArea">
            <h3>Modern Pharma BD</h3>
            <p>
              Bangladesh's most convenients online pharmachy, Bangladesh
              pharmacy is brought to you by the Dadha & Company_one of
              Bangladesh's most trusted pharmacies,with over 100 years
              experience in dispensing quality medicines
            </p>
            <div className="btn">
              <button className="buttonone">Get Us</button>
              <button className="buttonTwo">News And Blogs</button>
            </div>
          </div>
          <div className="imgArea">
         <img src="public/Photo/banner-doc.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannar;
