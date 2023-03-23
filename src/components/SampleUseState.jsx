import { useState } from 'react' //sempre que uma função for oficialmente do React, é chamado de hook
//um hook só pode ser usado antes do RETURN

const SampleUseState = () => {
  //"counter" é a variável que vai guardar um estado, "setCounter" é uma função que vai mudar a variável

  const [counter, setCounter] = useState(0)
  const [name, setName] =  useState('Fulano')
 
  return (
    <div>
        <h2>Contador: {counter}</h2>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        <hr />

        <h2>Olá {name}</h2>
        <button onClick={() => setName('Renan')}>Renan</button>
        <button onClick={() => setName('Pedro')}>Pedro</button>
    </div>
  )
}

export default SampleUseState