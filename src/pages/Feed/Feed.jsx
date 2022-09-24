import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { BiTrash } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal  from 'sweetalert2/dist/sweetalert2.js';

import { Link } from "react-router-dom";

import HeaderMain from "../../components/HeaderMain/HeaderMain";

import "./feed.css";
import Avatar from "../../components/Avatar/Avatar";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Deu tudo certo");
      });
  }, []);

  const deletePost = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      grow: 'false'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    var filtered = posts.filter((post) => post.id !== id);

    setPosts(filtered);
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
