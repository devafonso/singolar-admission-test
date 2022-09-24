import React from "react";
import { Link } from 'react-router-dom'
import Avatar from "../Avatar/Avatar";
import './headerMain.css'

function HeaderMain() {
    return (
        <header>
            <div className="container">
                <div className="linkProfile">
                    <Avatar/>
                    <h1 className="name">Singolar Feed</h1>
                </div>
                <div className="btn-newPost">
                    <Link to="/post">
                        <button>
                            Nova Postagem
                        </button>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default HeaderMain