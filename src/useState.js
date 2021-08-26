import React, { useState } from 'react'
function useState() {

  const [numero,setNumero ] = useState(0);
  const [segundoNumero, setSegungoNumero] = useState(0);
  const [resultado, setResultado] = useState(0);

   const somar = () => {
      let numeroInt = parseInt(numero);
      let numero2Int = parseInt(segundoNumero);

      setResultado(numeroInt + numero2Int);
   }
  /*Podemos usar desta forma também */

  // const [state, setState] =useState({
  // numero:0,
  // segundoNumero: 0,
  // resultado:0

  // });

  
  return (
    <>

    Numero 1: <input type="text" value={numero} 
    onChange={e=> setNumero(e.target.value)}/><br/>
    Numero 2: <input type="text" value={segundoNumero} 
    onChange={e=> setSegungoNumero(e.target.value)}/><br/>
    <button type="button" onClick={somar}>Calcular</button><br/>
    Resultado: <input type="text" value={resultado}/>
  
    </>
  
  );
}

export default useState;
