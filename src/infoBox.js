import React from "react";
import "./Map.css";

const InfoBox = ({ info }) => {
  return (
    <>
      <div className="infoBox">
        <header>
          <h2>Crime Info</h2>
        </header>
        <div>
          <p>
            CRIME: <strong>{info.description}</strong>
          </p>
          <p>
            CODE: <strong>{info.code}</strong>
          </p>
          <p>
            ID: <strong>{info.reportNum}</strong>
          </p>
          <p>
            DATE: <strong>{info.reportDate}</strong>
          </p>
          <p>
            OCCUR ON A: <strong>{info.offenseDate}</strong>
          </p>
          <p>
            LOCATION: <strong>{info.location}</strong>
          </p>
          <p>
            LOCATION TYPE: <strong>{info.locationType}</strong>
          </p>
          <p>
            NEIGHBORHOOD: <strong>{info.neighborhood}</strong>
          </p>
          <p>
            VICTIMS: <strong>{info.victim}</strong>
          </p>
           <p>
            CRIME AGAINST: <strong>{info.crimeAgainst}</strong>
          </p>
          <p>
            FIREARM INVOLVED?: <strong>{info.firearm}</strong>
          </p>
           <p>
            PRESS: <strong>{info.press}</strong>
          </p>
           <p>
            SOCIAL MEDIA: <strong>{info.social}</strong>
          </p>
        </div>
      </div>
    </>
  );
};
export default InfoBox;
