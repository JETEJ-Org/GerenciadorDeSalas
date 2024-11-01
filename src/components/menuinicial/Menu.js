import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/sidebar">Sidebar</Link>
      <Link to="/building">Building</Link>
      <Link to="/start">Start</Link>
    </nav>
  );
};

export default Menu;
