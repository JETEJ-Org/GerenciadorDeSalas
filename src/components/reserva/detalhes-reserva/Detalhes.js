import React from "react";
import "./Detalhes.css";

const Reservar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Detalhes da Reserva</h2>
        <form>
          <div className="form-group">
            <label>Sala</label>
            <input type="text" placeholder="Sala de Aula" id="room" disabled/>
          </div>
          <div className="form-group">
            <label>Data</label>
            <input type="date" id="date" disabled/>
          </div>
          <div className="form-group time-group">
            <div>
              <label>Início</label>
              <input type="time" id="i_time"disabled/>
            </div>
            <div>
              <label>Término</label>
              <input type="time" id="f_time" disabled/>
            </div>
          </div>
          <div className="form-group">
            <label>Motivo</label>
            <textarea placeholder="Descreva o motivo da reserva" id="reserve_reason" disabled></textarea>
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