import React from 'react'
import "./Investigacion.css"

const Investigacion = () => {
  return (
    <div className="inv-container">
      <div className="articles-container">
        <article className="inv-article">
          <div className="header-article">
            <h2 className="title-article">Áreas de investigación</h2>
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
        <article className="inv-article">
          <div className="header-article">
            <h2 className="title-article">Investigaciones actuales</h2>
            <hr />
          </div>
          <ul className="lista">
            <li>Premio al Mérito Académico en Pociones Avanzadas</li>
            <li>Medalla de Honor del Consejo de Maestros de Hogwarts</li>
            <li>Premio de Investigación en Artes Mágicas</li>
          </ul>
        </article>
        <article className="inv-article">
          <div className="header-article">
            <h2 className="title-article">Eventos</h2>
            <hr />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue
            ante ut fringilla cursus. Vivamus eu egestas ante. In quis velit
            congue, tincidunt tellus a, laoreet erat. Cras congue blandit
            tempor. Praesent et elit scelerisque, fermentum risus ac, egestas
            massa. Quisque laoreet eros arcu, sit amet pretium justo convallis
            sit amet. Morbi mollis eget est in elementum.
          </p>
        </article>
      </div>

      <article className="grupos-inv">
        <h3>Grupos de investigación</h3>
        <ul>
          <li>
            <div className="grupo-inv">
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
            <div className="grupo-inv">
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
            <div className="grupo-inv">
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

export default Investigacion