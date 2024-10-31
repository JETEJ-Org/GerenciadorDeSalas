import React from "react";

// Assets
import maintenance from "../../assets/building/undraw_maintenance.svg";

// Styles
import "./building.css";

// Render
const Building = () => {
  return (
    <div className="building-body">
      <div className="building-main-container">
        <p id="construction-user">Olá!</p>
        <img src={maintenance} alt="" />
        <p>Esta parte do site ainda está em construção.
          <br />Volte em breve!
        </p>
      </div>

      <section className="section-waves">
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
      </section>
    </div>
  );
};

export default Building;
