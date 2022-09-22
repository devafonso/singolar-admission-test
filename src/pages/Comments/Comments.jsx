import React from "react";
import { Link } from "react-router-dom";

function Comments() {
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

export default Comments;
