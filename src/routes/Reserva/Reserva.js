import React, { useState, useRef } from "react";
import "./Reserva.css";

//Componentes
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

import Reservar from "../../components/reserva/nova-reserva/Reservar";
import Detalhar from "../../components/reserva/detalhes-reserva/Detalhes";

import More from "../../assets/header_images/more.png";
import Search from "../../assets/header_images/search.png";

const Reserva = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible2, setPopupVisible2] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  }
  const togglePopup2 = () => {
    setPopupVisible2(!isPopupVisible2);
  }

  return (
    
    <div className="bodycontainer">      
      <main>
        <div><Sidebar /> </div>
        <div><Header /> </div>
        
        <div className="top">            
          <h1>Reservas</h1>
          <button className="newreserve_button" onClick={togglePopup}>+ Reserva</button>
          <Reservar isVisible={isPopupVisible} onClose={togglePopup}/>
        </div>
        <div className="input-container">
          <div className="search_icon">
            <img src={Search} className="icon" alt="Search Icon" />
          </div>
          <input type="text" placeholder="Search Room" className="search"/>         
        </div>
        
        <div className="roomcontainer" id="roomcontainer">
          <div className="room">
            <p id="info1">Sala</p>
            <p id="info2">Pessoa</p>
            <p id="info3">Data</p>
            <p id="info4">Horário</p>            
            <button className="moreinfo" onClick={togglePopup2}><img src={More} alt="More Info"/></button>
            <Detalhar isVisible={isPopupVisible2} onClose={togglePopup2}/>
          </div>
        </div>
        
        {/*<div className="pages_count"> 
          <div className="count">
            <p className="atual">1</p>
            <p>-</p>
            <p className="total">5</p>
          </div>
          <div className="arrows">
            <img src="" alt="left"></img>
            <img src="" alt="right"></img>
          </div>
        </div>*/}
      </main>
    </div>    
  );
}

export default Reserva;