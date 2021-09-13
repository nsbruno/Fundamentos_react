import React from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {      
    const min = 50
    const max = 70
    const geradorIdade = () => parseInt(Math.random() * (max - min))
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
          <div>
              Filho
          </div>
          <button onClick={_ => props.quandoClicar('João', geradorIdade(), gerarNerd())}>
              Fornecer Informações
          </button>
        </div>
    )
}