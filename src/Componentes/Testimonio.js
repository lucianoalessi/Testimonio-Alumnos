import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../Imagenes/testimonio-${props.imagen}.png`)}
      alt='Fotografia de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> in <strong>{props.pais}</strong></p>
        <p className='cargo-testimonio'><strong>{props.cargo}</strong> at <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>

      </div>

    </div> 

  );

}

export default Testimonio;