import React from "react";

import LogoArchivo from "../img/file-empty.png";
import LogoCarpeta from "../img/opened-folder.png";

const Directorio = ({ nombre, tipo }) => {
  return (
    <div className={`card ${tipo}`}>
      <img
        src={tipo === "archivo" ? LogoArchivo : LogoCarpeta}
        alt={`Logo ${tipo === "Archivo" ? "Archivo" : "Carpeta"}`}
      ></img>
      <p>
        <strong>{nombre}</strong>
      </p>
    </div>
  );
};

export default Directorio;
