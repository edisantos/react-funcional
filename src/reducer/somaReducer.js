import {useReducer} from  'react'

const STATE_INICIAL = {
    resultato : ''
}

const somaReducer = (state = STATE_INICIAL, action) => {
  switch(action.type){
         case 'SOMA':
          case 'SUBTRACAO':
              case 'DIVISAO':
          return {...state, resultado: action.payload }
         
          default:
              return state;
  }

}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore;