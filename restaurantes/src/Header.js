import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://us.123rf.com/450wm/sabuhinovruzov/sabuhinovruzov1705/sabuhinovruzov170500027/77413894-icono-de-comida-r%C3%A1pida-en-el-fondo-negro-.jpg"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Bienvenido {!user ? '' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Cerrar sesión' : 'Registrarse'}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
