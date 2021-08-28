import React, { useState } from 'react'
import useStore from './somaReducer'
function ReducerHook() {

  const [numero,setNumero ] = useState('')
  const [segundoNumero, setSegungoNumero] = useState('')

  const [store, dispatch] = useStore()

   const somar = () => {
      const numeroInt = parseInt(numero)
      const numero2Int = parseInt(segundoNumero)
      
      dispatch({
           type:'SOMA',
           payload: numeroInt + numero2Int
       })
      
   }

   const subtrair = () => {
    const numeroInt = parseInt(numero)
    const numero2Int = parseInt(segundoNumero)
    
    dispatch({
         type:'SUBTRACAO',
         payload: numeroInt - numero2Int
     })
    
 }
 
 const divisao = () => {
  const numeroInt = parseInt(numero)
  const numero2Int = parseInt(segundoNumero)
  
  dispatch({
       type:'DIVISAO',
       payload: numeroInt / numero2Int
   })
  
}
  
  return (
    <div>

    Numero 1: <input type="text" value={numero} 
    onChange={e=> setNumero(e.target.value)}/><br/>
    Numero 2: <input type="text" value={segundoNumero} 
    onChange={e=> setSegungoNumero(e.target.value)}/><br/>
    <button type="button" onClick={somar}>Somar</button>  
    <button type="button" onClick={subtrair}>Subtrair</button>
    <button type="button" onClick={divisao}>Divisao</button>
    <br/>
    Resultado: <input type="text" value={store.resultado} readOnly/>
  
    </div>
  
  );
}

export default ReducerHook;
