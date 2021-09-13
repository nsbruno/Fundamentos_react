import React from 'react'
export default function ComParametro(props) {
  const nota = Math.ceil(props.nota);
  const status = nota >= 7 ? "Aprovado" : "de Recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota {nota} e está {status}{" "}
      </p>
    </div>
  );
}
