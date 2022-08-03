import React from "react";
import "./Blocks.css";
import ArrayofObjects from "./ArrayofObjects";

function Home() {
  return (
    <>
      {ArrayofObjects.map((value, id) => {
        return (
          <div key={id} className="container">
            <div className="block-container">
              <p>
                <span className="data-props duration-color">
                  {value.Duration}
                </span>
              </p>
              <p>
                <span className="data-props pkgname-style">
                  {value.PkgName}
                </span>
              </p>
              <p>
                Data: <span className="data-props">{value.DataFor}</span>
              </p>
              <p>
                JazzMins: <span className="data-props">{value.JazzMins}</span>
              </p>
              <p>
                OtherNetworkMins:{" "}
                <span className="data-props">{value.OtherNetworkMins}</span>
              </p>
              <p>
                SMS: <span className="data-props">{value.SMS}</span>
              </p>
              <p>
                Charges: <span className="data-props">{value.Charges}</span>
              </p>

              <button className="button">Subscribe</button>
              <img src={value.img}></img>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
