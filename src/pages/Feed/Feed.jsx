import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Avatar from "../../components/Avatar/Avatar";
import { useState, useEffect } from "react";
import axios from "axios";
import { BiTrash } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link } from "react-router-dom";

import "./feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Deu tudo certo");
      });
  }, []);

  const deletePost = (id) => {
    Swal.fire({
      title: "Deseja realmente apagar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00875f",
      cancelButtonColor: "#8d8d99",
      confirmButtonText: "Sim, apagar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        var filtered = posts.filter((post) => post.id !== id);

        setPosts(filtered);

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Post deletado com sucesso!",
        });
      }
    });
  };

  return (
    <div>
      <HeaderMain></HeaderMain>

      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <Avatar />
                  <h2>{post.title}</h2>
                </header>

                <div className="line"></div>
                <p>{post.body}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `edit/${post.id}` }}>
                      <button>
                        <FiEdit />
                      </button>
                    </Link>
                  </div>
                  <div className="btn-readmore">
                    <Link to={{ pathname: `comments/${post.id}` }}>
                      <button>
                        <FaComments />
                      </button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deletePost(post.id)}>
                      <BiTrash />
                    </button>
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
