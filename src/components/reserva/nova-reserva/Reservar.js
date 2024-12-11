import React from "react";
import "./Reservar.css";


//Código provisório, apenas para ver se o pop-up aparece.

const Reservar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Nova Reserva</h2>
        <form>
          <div className="form-group">
            <label>Sala</label>
            <input type="text" placeholder="Sala de Aula" />
          </div>
          <div className="form-group">
            <label>Data</label>
            <input type="date" />
          </div>
          <div className="form-group time-group">
            <div>
              <label>Início</label>
              <input type="time" />
            </div>
            <div>
              <label>Término</label>
              <input type="time" />
            </div>
          </div>
          <div className="form-group">
            <label>Motivo</label>
            <textarea placeholder="Descreva o motivo da reserva"></textarea>
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

export default Reservar;