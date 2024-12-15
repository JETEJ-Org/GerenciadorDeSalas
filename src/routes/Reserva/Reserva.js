import React, { useState, useRef } from "react";
import "./Reserva.css";

// Componentes
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

import Reservar from "../../components/reserva/nova-reserva/Reservar";
import Detalhar from "../../components/reserva/detalhes-reserva/Detalhes";

import More from "../../assets/header_images/more.png";
import Search from "../../assets/header_images/search.png";
import Filter from "../../assets/header_images/filter.png";

const Reserva = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false); // Estado para controlar a visibilidade do input

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const togglePopup2 = () => {
    setPopupVisible2(!isPopupVisible2);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="bodycontainer">
      <main>
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
        </div>

        <div className="top">
          <h1>Reservas</h1>
          <button className="filter_button" onClick={toggleInputVisibility}>
            <img src={Filter} alt="Filter" />
          </button>
          <button className="newreserve_button" onClick={togglePopup}>
            + Reserva
          </button>
          <Reservar isVisible={isPopupVisible} onClose={togglePopup} />
        </div>

        {isInputVisible && (
          <div className="input-container">
            <div className="search_icon">
              <img src={Search} className="icon" alt="Search Icon" />
            </div>
            <input id="filter" type="text" placeholder="Search Room" className="search" />
          </div>
        )}

        <div className="roomcontainer" id="roomcontainer">
          <div className="room">
            <p id="info1">Sala</p>
            <p id="info2">Pessoa</p>
            <p id="info3">Data</p>
            <p id="info4">Horário</p>
            <button className="moreinfo" onClick={togglePopup2}>
              <img src={More} alt="More Info" />
            </button>
            <Detalhar isVisible={isPopupVisible2} onClose={togglePopup2} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reserva;
