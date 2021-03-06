import {FETCH_ALL, CREATE, EDIT, DELETE} from '../tools/consts'
import * as api from '../tools/api'


export const getItems =()=> async(dispatch)=> {
	try{
		dispatch({type: 'START_LOADING'})
		const {data} = await api.fetchItems()
		dispatch({type: FETCH_ALL, payload: data})
		dispatch({type: 'END_LOADING'})
	 }
	catch(error){
		console.log(error.message)
	}
   }
export const addItem =(itemData)=> async(dispatch)=> {
	try{
		const {data} = await api.createItem(itemData)
		dispatch({type: CREATE, payload: data})
	 }
    catch(error){
    	console.log(error)
    }
   }

export const updateItem =(id, itemData)=> async(dispatch)=> {
	try{
		const {data} = await api.editItem(id, itemData)
		dispatch({type: EDIT, payload: data})
	 }
	catch(error){
		console.log(error)
	}
   }
   
export const removeItem =(id)=> async(dispatch)=> {
	try{
		await api.deleteItem(id)
		dispatch({type: DELETE, payload: id})
	 }
	catch(error){
		console.log(error)
	}
   }
export const formOpen =()=> async(dispatch)=> {
	try{
		 dispatch({type: 'OPEN_ADD'})
	}
	catch(error){
		console.log(error.message)
	}
}
export const formClose =()=> async(dispatch)=> {
	try{
		dispatch({type: 'CLOSE_ADD'})
	}
	catch(error){
		console.log(error.message)
	}
}
