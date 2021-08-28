import {useReducer} from  'react'

const STATE_INICIAL = {
    resultato : ''
}

const somaReducer = (state = STATE_INICIAL, action) => {
  switch(action.type){
<<<<<<< HEAD
         case 'SOMA':
          case 'SUBTRACAO':
              case 'DIVISAO':
          return {...state, resultado: action.payload }
         
=======
      case 'SOMA':
          return {...state, resultado: action.payload }
>>>>>>> 9dd38a8e301f600614996aab0b5aded71bf3daf6
          default:
              return state;
  }

}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore;