import React from "react";
import { Link } from 'react-router-dom'
import './headerMain.css'

function HeaderMain() {
    return (
        <header>
            <div className="container">
                <div>
                    <h1>Singolar Feed</h1>
                </div>
                <div className="btn-newPost">
                    <Link to="/post">
                        <button>
                            Add new Post
                        </button>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default HeaderMain