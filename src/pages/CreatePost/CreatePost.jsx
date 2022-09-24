import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./createPost.css";
import axios from "axios";
import Swal  from 'sweetalert2/dist/sweetalert2.js';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  title: yup
    .string()
    .required("O título é obrigatório")
    .max(40, "O título precisa ter menosde 40 caracteres"),

  content: yup
    .string()
    .required("O conteúdo é obrigatório")
    .max(500, "O conteúdo precisa ter menosde 500 caracteres"),
});

function CreatePost() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) =>
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Post criado com sucesso!'
        })
        navigate("/");
      })
      .catch(() => {
        console.log("Deu errado");
      });

  return (
    <div>
      <Header></Header>
      <main>
        <div className="card-post">
          <h1>Nova Postagem</h1>
          <div className="line-post"></div>
          <div className="card-body-post"></div>

          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label>Título</label>
              <input type="text" name="title" {...register("title")}></input>
              <p className="error-message">{errors.title?.message}</p>
            </div>

            <div className="fields">
              <label>Descrição</label>
              <textarea
                placeholder="No que vocë está pensando?..."
                type="text"
                name="content"
                {...register("content")}
              ></textarea>
              <p className="error-message">{errors.content?.message}</p>
            </div>
            <div className="btn-post">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreatePost;
