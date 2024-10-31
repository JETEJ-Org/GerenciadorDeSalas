import React, { useState } from 'react';

// Styles
import './sidebar.css';

// Assets
import Logo from '../../assets/sidebar_images/Logo.png';
import Home from '../../assets/sidebar_images/faHomeLg.png';
import Reservas from '../../assets/sidebar_images/faInbox.png';
import Calendar from '../../assets/sidebar_images/faCalendarAlt.png';
import Salas from '../../assets/sidebar_images/faChalkboardTeacher.png';
import Notas from '../../assets/sidebar_images/faEnvelope.png';
import Relatorios from '../../assets/sidebar_images/faChartColumn.png';
import Funcionarios from '../../assets/sidebar_images/faUserLarge.png';
import Logout from '../../assets/sidebar_images/faArrowRightFromBracket.png';

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div>
      <div className={`sidebar ${isClosed ? 'closed' : ''}`}>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="menu">
          <ul>
            <li><img src={Home} className="icon" alt="Home" /><a href="#inicio">Início</a></li>
            <li><img src={Reservas} className="icon" alt="Reservas" /><a href="#reservas">Reservas</a></li>
            <li><img src={Calendar} className="icon" alt="Calendário" /><a href="#calendario">Calendário</a></li>
            <li><img src={Salas} className="icon" alt="Salas" /><a href="#salas">Salas</a></li>
            <li><img src={Notas} className="icon" alt="Notas" /><a href="#notas">Notas</a></li>
            <li><img src={Relatorios} className="icon" alt="Relatórios" /><a href="#relatorios">Relatórios</a></li>
            <li><img src={Funcionarios} className="icon" alt="Funcionários" /><a href="#funcionarios">Funcionários</a></li>
          </ul>
        </nav>
        <div className="logout">
          <ul>
            <li><img src={Logout} className="icon" alt="Sair" /><a href="#sair">Sair</a></li>
          </ul>
        </div>
      </div>
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
    </div>
  );
};

export default Sidebar;
