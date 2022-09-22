import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";

import "./feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Deu tudo certo");
      });
  }, []);
  return (
    <div>
      <HeaderMain></HeaderMain>
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                    <h2>{post.title}</h2>
                </header>
                <div className="line"></div>
                <p>{post.body}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to="/edit">
                      <button>Edit</button>
                    </Link>
                  </div>
                  <div className="btn-readmore">
                    <Link to="/comments">
                      <button>Comments</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Feed;
