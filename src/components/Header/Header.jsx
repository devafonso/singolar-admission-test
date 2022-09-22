import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
