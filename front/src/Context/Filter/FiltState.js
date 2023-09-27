import { useReducer } from "react"
import {FiltContext} from "../Contexts"
import FiltReducer from "./FiltReducer"

import {SET_CATEGORY, SET_SEARCH, RESET,
        SET_MIN_PRICE, SET_MAX_PRICE, ERROR} from "./FiltTypes.js"

export const FiltState = ({ children }) => {
  
  const initialState = {
    itemCategory: '',
    itemSearch: '',
    itemPrice: {min: '', max: ''},
    error: null
  };

  const [state, dispatch] = useReducer(FiltReducer, initialState)

  const setCategory = (source) => {
	try{
		dispatch({type: SET_CATEGORY, payload: source})
	 }
	catch(err){	
		dispatch({type: ERROR, payload: err})
	  }
   }
  
  const setSearch = (source) => {
    try{
		dispatch({type: SET_SEARCH, payload: source})
	 }
    catch(err){
    	dispatch({type: ERROR, payload: err})
    	console.log(err)
    }
  }
  
  const setMinPrice = (source) => {
	  try{
	     dispatch({type: SET_MIN_PRICE, payload: source})
	   }
	    catch(err){
    	dispatch({type: ERROR, payload: err})
    	console.log(err)
	 }
   }
   
  const setMaxPrice = (source) => {
	   try{
	     dispatch({type: SET_MAX_PRICE, payload: source})
	   }
	    catch(err){
    	dispatch({type: ERROR, payload: err})
    	console.log(err)
	 }
   }
  const reset = () => {
	  dispatch({type: RESET, payload: initialState})
	  console.log(state)
	  }

 
  return (

    <FiltContext.Provider
      value={{
        state,
        setCategory,
        setSearch,
        setMinPrice,
        setMaxPrice,
        reset
      }}
    >
      {children}
    </FiltContext.Provider>
  );
};
