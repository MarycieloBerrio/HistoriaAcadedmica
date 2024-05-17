import React from 'react'
import "./Asignaturas.css"

const Asignaturas = () => {
  return (
    <div className="asignaturas-container">
      <div className="articles-container">
        <article className="asignaturas-article">
          <div className="header-article">
            <h2 className="title-article">Asignaturas 2024-1</h2>
            <hr />
          </div>
          <p>
            El Profesor Severus Snape, con una amplia experiencia en el campo de
            las pociones, es actualmente Profesor Asociado en la Facultad de
            Minas de la UNAL. Posee un Doctorado en Pociones de la Universidad
            de Ginebra y una Licenciatura en Humanidades Clásicas de Oxford.
            Previamente, ocupó el cargo de Becario de Desarrollo de Carrera en
            Pociones en la misma institución. Su dedicación a la enseñanza y su
            destacada investigación lo convierten en un referente en el campo de
            las artes mágicas.
          </p>
        </article>
        <article className="asignaturas-article">
          <div className="header-article">
            <h2 className="title-article">Asignaturas dictadas en semestres anteriores</h2>
            <hr />
          </div>
          <ul className="lista">
            <li>Premio al Mérito Académico en Pociones Avanzadas</li>
            <li>Medalla de Honor del Consejo de Maestros de Hogwarts</li>
            <li>Premio de Investigación en Artes Mágicas</li>
          </ul>
        </article>
      </div>
    </div>
  )
}

export default Asignaturas