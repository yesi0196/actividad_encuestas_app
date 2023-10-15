import React from 'react';

function Encuestas({ encuestas }) {
  const listStyle = {
    textAlign: 'left', // Alinea el texto a la izquierda
  };

  return (
    <div>
      <ul style={listStyle}>
        <h2>Encuestas Disponibles</h2>
        {encuestas.map(encuesta => (
          <li key={encuesta.id}>
            {encuesta.pregunta}
            {encuesta.opciones.map((opcion, index) => (
              <div key={index}>{opcion}</div>
            ))}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Encuestas;
