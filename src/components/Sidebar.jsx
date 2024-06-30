import React from "react";
import stlyes from "./Sidebar.module.css";
import CoverFeed from "../assets/cover-feed.svg";
import picture from "../assets/picture.jpg";

import { PencilSimple } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={stlyes.sidebar}>
      <img src={CoverFeed} className={stlyes.cover} />
      <div className={stlyes.profile}>
        <img src={picture} className={stlyes.avatar} />
        <strong>Nathã Souza Lopes</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimple size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
