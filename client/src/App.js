import React, { useState, useEffect } from "react";
import axios from "axios";

import "./css/style.scss";

import Directorio from "./components/Directorio";

function App() {
  const [directorios, setDirectorios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFromAPI = async (path) => {
    const response = await axios.get(`http://localhost:8080/content/${path}`);
    console.log(response);
    setDirectorios(response.data.content);
    setLoading(false);
  };

  useEffect(() => {
    fetchFromAPI("/");
  }, []);

  return (
    <div className="App">
      <h1 className="titulo-principal">☁ Local Cloud ☁</h1>
      <div className="container-directorios">
        {!loading ? (
          directorios.archivos.map((item) => (
            <Directorio nombre={item} tipo="archivo" />
          ))
        ) : (
          <p>Cargando...</p>
        )}
        {!loading ? (
          directorios.directorios.map((item) => (
            <Directorio nombre={item} tipo="directorio" />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

export default App;
