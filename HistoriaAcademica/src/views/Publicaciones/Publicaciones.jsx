import React from 'react'
import "./Publicaciones.css"

const Publicaciones = () => {
  return (
    <div className="publicaciones-container">
      <div className="articles-container">
        <article className="publicaciones-article">
          <div className="header-article">
            <h2 className="title-article">Publicaciones</h2>
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

      <article className="grupos-investigacion">
        <h3>Grupos de investigación</h3>
        <ul>
          <li>
            <div className="grupo-investigacion">
              <div className="header-pub">
                <h4>Nombre del grupo</h4>
                <p>Área de investigación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
          <li>
            <div className="grupo-investigacion">
              <div className="header-pub">
                <h4>Nombre del grupo</h4>
                <p>Área de investigación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
          <li>
            <div className="grupo-investigacion">
              <div className="header-pub">
                <h4>Nombre del grupo</h4>
                <p>Área de investigación</p>
              </div>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default Publicaciones