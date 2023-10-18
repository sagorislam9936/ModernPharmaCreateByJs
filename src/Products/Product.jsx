import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div>
      <section className="Products containar">
        <div className="title">
          <h2>OUR LATEST PRODUCTS</h2>
          <p>
            Modern pharmachy BD is an online pharmachy that offers professional
            home delivery services for health care products,with a focus on
            quality and customer care.
          </p>
        </div>

        <div className="prductParent">
          <div className="ProductChildOne">
            <img
              src="./photos/product01.webp"
              alt="product one"
              className="img"
            />
            <h4>Medical Microscope</h4>
            <p>
              The microscope is a device for viewing objects that are too small
              to be...
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product02.webp"
              alt="product one"
              className="img"
            />
            <h4>Hand Sanitizer Covid-19</h4>
            <p>
              You should be able to buy this ingredients in pharmacies or
              drugstore...
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product03.webp"
              alt="product one"
              className="img"
            />
            <h4>Medical Thermometer</h4>
            <p>
              Digital thermometers are the most accurate way to take body
              temperatur...
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product04.webp"
              alt="product one"
              className="img"
            />
            <h4>New Temperature Gun</h4>
            <p>
              Temperature readings from this devices are inanimate objects, the
              meas...
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product05.webp"
              alt="product one"
              className="img"
            />
            <h4>Lab N95 Face Mask</h4>
            <p>
              Care insructions.Non washable 3-play with 3 layers provide 99%
              filtr...filtr.........
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product06.webp"
              alt="product one"
              className="img"
            />
            <h4>Hand SanitizerCovid-19</h4>
            <p>
              The microscope is a device for viewing objects that are too small
              to be...
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product07.webp"
              alt="product one"
              className="img"
            />
            <h4>Medical & Health</h4>
            <p>
              The microscope is a device for viewing objects that are too small
              to be...
            </p>
            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>

          <div className="ProductChildOne">
            <img
              src="./photos/product08.webp"
              alt="product one"
              className="img"
            />
            <h4>Inhaler Pressure Meter</h4>
            <p>
              Easy&Simple to USE: The flow The flow meter of this oxygen
              regulator is 0-10L/M......
            </p>

            <h5>$100</h5>

            <h6>
              <button>View More</button>
            </h6>
          </div>
        </div>

        <div className="Browse">
          <button>Browse More</button>
        </div>
      </section>
    </div>
  );
};

export default Product;
