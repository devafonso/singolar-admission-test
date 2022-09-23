import React, { useEffect } from "react";
import Header from "../../components/Header/Header";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  title: yup.string().required("O título é obrigatório"),

  description: yup
    .string()
    .required("A descrição é obrigatório")
    .max(150, "A descrição precisa ter menosde 150 caracteres"),
  body: yup
    .string()
    .required("O conteúdo é obrigatório")
    .max(500, "O conteúdo precisa ter menosde 500 caracteres"),
});

function EditPost() {
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        reset(response.data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) =>
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then(() => {
        console.log("Deu certo");
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
          <h1>Editar postagem</h1>
          <div className="line-post"></div>
          <div className="card-body-post"></div>

          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label>Título</label>
              <input type="text" name="title" {...register("title")}></input>
              <p className="error-message">{errors.title?.message}</p>
            </div>
            <div className="fields">
              <label>Descricao</label>
              <input
                type="text"
                name="description"
                {...register("description")}
              ></input>
              <p className="error-message">{errors.description?.message}</p>
            </div>
            <div className="fields">
              <label>Conteudo</label>
              <textarea
                type="text"
                name="body"
                {...register("body")}
              ></textarea>
              <p className="error-message">{errors.body?.message}</p>
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

export default EditPost;
