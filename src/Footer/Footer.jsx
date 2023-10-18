import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section className="footerArea">
        <div className="parentFooter">
          <div className="childOne containar">
            <h3>About Our Company</h3>

            <p>
              Bangladesh's most convenient online pharnacy.Bangladesh, is
              brought to you by the Dadha & Company - one of Bangladesh's most
              trusted pharmacies, with over 100 years experience in dispensing
              quality medicines
            </p>
          </div>

          <div className="childOne containar">
            <p>About Or Pharmacy</p>

            <p>Read Our Blog</p>
            <p>Sign Up To Deliver</p>
          </div>

          <div className="childOne containar">
            <p>Get Help</p>
            <p>Read FAQS</p>
            <p>View All Cities</p>
          </div>
        </div>
        <div className="copyright">
          <hr className="dag" />
          <p>
            Copyright &copy; 2021 All Rights Reserved By{" "}
            <span>Sagor Islam</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
