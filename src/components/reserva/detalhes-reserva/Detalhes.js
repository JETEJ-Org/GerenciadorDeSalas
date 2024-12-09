import React from "react";
import "./Detalhes.css";


//Código provisório, apenas para ver se o pop-up aparece.

const Detalhar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Detalhes da Reserva</h2>
        <form>
          <div className="form-group">
            <label>Sala</label>
            <p className="info" id="sala">alguma sala </p>
          </div>
          <div className="form-group">
            <label>Data</label>
            <p className="info" id="data"> / / </p>
          </div>
          <div className="form-group time-group">
            <div>
              <label>Início</label>
              <p className="info" id="hora_inicio"> : </p>
            </div>
            <div>
              <label>Término</label>
              <p className="info" id="hora_fim"> : </p>
            </div>
          </div>
          <div className="form-group">
            <label>Motivo</label>
            <p className="info" id="motivo_reserva">algum motivo </p>
          </div>
          <div className="actions">
            <button type="button" onClick={onClose}>
              Anterior
            </button>
            <button type="submit">Finalizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detalhar;