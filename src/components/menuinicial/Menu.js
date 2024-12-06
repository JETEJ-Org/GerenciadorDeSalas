import { Link } from "react-router-dom";
import "./menuinicial.css"

const Menu = () => {
  return (
    <div className="divLinks">
      <Link className="linkNav" to="/reserva">Reserva</Link>
      <Link className="linkNav" to="/login">Login</Link>
      <Link className="linkNav" to="/sidebar">Sidebar</Link>
      <Link className="linkNav" to="/building">Building</Link>
      <Link className="linkNav" to="/start">Start</Link>
      <Link className="linkNav" to="/cadastro">Cadastro</Link>
      <Link className="linkNav" to="/splashscreen">SplashScreen</Link>
    </div>
  );
};

export default Menu;
