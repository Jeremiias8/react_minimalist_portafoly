import React from 'react'
import '../Index.css'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {

  return (
    <div className='home'>

      <h1>
        Hola, soy Jeremías Fernández, soy estudiante de <strong>Desarrollo Web</strong> en
        Alicante, y os ofrezco que consultéis mis <strong>proyectos</strong> personales en mi
        GitHub.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o app web, con buen SEO y órden semántico favorable para la búsqueda en Internet.
      </h2>

      <section className="lasts-works">

        <h2 className='heading'>Mis Proyectos. <Link to="/contacto">Contacta conmigo.</Link></h2>
        <p>GitHub: Jeremiias8</p>

        <ListadoTrabajos limite="2" />

      </section>

    </div>
  );

}
