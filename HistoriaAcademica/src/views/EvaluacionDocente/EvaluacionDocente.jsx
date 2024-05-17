import React from 'react'
import "./EvaluacionDocente.css"

const EvaluacionDocente = () => {
  return (
    <div className="evaluacion-container">
      <div className="articles-container">
        <article className="evaluacion-article">
          <div className="header-article">
            <h2 className="title-article">Evaluación docente</h2>
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
      </div>
    </div>
  )
}


export default EvaluacionDocente