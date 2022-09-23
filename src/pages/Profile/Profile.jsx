import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import "./profile.css";

function Profile() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch(() => {
        console.log("Deu tudo certo");
      });
  }, []);

  return (
    <div>
      <div>
        <div className="header__wrapper">
          <header></header>
          <div className="cols__container">
            <div className="left__col">
              <div className="img__container">
                <img
                  src="https://avatars.githubusercontent.com/u/86217620?v=4"
                  alt="Afonso"
                />
                <span></span>
              </div>
              <h2>Afonso Lima </h2>
              <p>Web Developer</p>
              <p>afonso.limsoares@gmail.com</p>

              <ul className="about">
                <li>
                  <span>4,073</span>Seguidores
                </li>
                <li>
                  <span>322</span>Seguindo
                </li>
                <li>
                  <span>200,543</span>Impressões
                </li>
              </ul>

              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor
                  dictum, nisl ligula egestas nulla.
                </p>

                <ul>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <i className="fab fa-pinterest"></i>
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-dribbble"></i>
                </ul>
              </div>
            </div>
            <div className="right__col">
              <nav>
                <ul>
                  <li>
                    <a href="">Albuns</a>
                  </li>
                </ul>
                <button>Voltar</button>
              </nav>

              <div className="photos">
                {photos.map((photos, key) => {
                  return <img src={photos.url} alt="Photo" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
