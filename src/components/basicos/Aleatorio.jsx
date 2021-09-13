import React from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { minimo, maximo } = props 
    const aleatorio = parseInt(Math.random() * (maximo - minimo) + minimo)
    return(
  <div>
    <h2>Valor Aleatório</h2>
    <p>
      <strong>Valor Mínimo: </strong> {minimo}
    </p>
    <p>
      <strong>Valor Máximo: </strong> {maximo}
    </p>
    <p>
      <strong>Valor Escolhido: </strong>
      { aleatorio }
    </p>
  </div>
    )
};
