import React from "react";
import styles from "./Post.module.css";
import picture from "../assets/picture.jpg";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={picture} className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Nathã Souza Lopes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="30 de Junho às 11:39" dateTime="2024-06-30 11:13:52">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
