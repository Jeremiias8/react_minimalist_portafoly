import React from 'react'
import '../Index.css';

export const Servicios = () => {

  return (
    <div className="page">
      <h1 className='heading'>Servicios</h1>

      <section className="services">

        <article className="service">
          <h2>Diseño Web</h2>
          <p>Estilos y maquetación</p>
        </article>
        <article className="service">
          <h2>Desarrollo Web</h2>
          <p>Interactividad para la web</p>
        </article>
        <article className="service">
          <h2>Posicionamiento Web</h2>
          <p>Aparición en Google con buen tráfico</p>
        </article>

      </section>
    </div>
  );

}
