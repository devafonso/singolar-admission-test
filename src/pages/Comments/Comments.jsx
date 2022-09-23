import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./comments.css";

function Comments() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch(() => {
        console.log("Deu tudo certo");
      });
  }, []);

  return (
    <div>
      <Header />

      <main>
        <div className="cards">
          {comments.map((comment, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{comment.name}</h2>
                  <p>{comment.email}</p>
                </header>
                <div className="line"></div>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Comments;
