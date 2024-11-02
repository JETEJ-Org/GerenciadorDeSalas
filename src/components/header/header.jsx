import React, { useRef, useEffect } from 'react';

//Styles
import './header.css';

//Assets
import Sue from "../../assets/header_images/Sue.png"
import Search from "../../assets/header_images/search.png"
import Notification from "../../assets/header_images/Notifications (1).png"
import Gear from "../../assets/header_images/faCog.png"
import More from "../../assets/header_images/Keyboard arrow down.png"
import Close from "../../assets/header_images/xmark-solid.svg"

const Header = () => {
  
  const inputSearchRef = useRef(null);
  const btnCloseRef = useRef(null);

  useEffect(() => {
    
    const handleClearSearch = () => {
      if (inputSearchRef.current) inputSearchRef.current.value = '';
    };

    if (btnCloseRef.current) {
      btnCloseRef.current.addEventListener('click', handleClearSearch);
    }

    
    return () => {
      if (btnCloseRef.current) {
        btnCloseRef.current.removeEventListener('click', handleClearSearch);
      }
    };
  }, []);

  return (
    <>
      <nav className="container_header">
  <div className="group_search">
    <div className="icon_search">
      <img src={Search} className='icon' alt="search icon" />
    </div>
    <input
      type="text"
      placeholder="Buscar"
      className="input_search"
      ref={inputSearchRef}
    />
    <div className="btn_close" ref={btnCloseRef}>
      <img src={Close} className='icon' alt="close icon" />
    </div>
  </div>
  <div className="group_menu">
    <img src={Notification} className="icon" alt="notification icon" />
    <img src={Gear} className="icon" alt="gear icon" />
  </div>
  <div className="group_profile">
    <div className="profile_photo">
      <img src={Sue} alt="Sue" />
    </div>
    <div className="profile_name">
      <h5>Sue</h5>
    </div>
    <div className="profile_settings">
      <img src={More} alt="settings icon" />
    </div>
  </div>
</nav>
    </>
  );
};

export default Header;