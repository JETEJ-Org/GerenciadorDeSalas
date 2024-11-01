import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faBell, faGear, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

//Styles
import './header.css';

//Assets
import Sue from "../../assets/header_images/Sue.png"

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
      <nav className="container_search">
          <div className="group_search">
            <div className="icon_search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              type="text"
              placeholder="Buscar"
              className="input_search"
              ref={inputSearchRef} 
            />
            <div className="btn_close" ref={btnCloseRef}> 
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </nav>

        <nav className="container_menu">
          <div className="group_menu">
            <a href="#"><FontAwesomeIcon icon={faBell} /></a>
            <a href="#"><FontAwesomeIcon icon={faGear} /></a>
          </div>
        </nav>

        <nav className="container_profile">
          <div className="group_profile">
            <div className="profile_photo">
              <img src={Sue} alt="Sue" />
            </div>
            <div className="profile_name">
              <h5>Sue</h5>
            </div>
            <div className="profile_settings">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
        </nav>
    </>
  );
};

export default Header;