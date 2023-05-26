import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
//import { addItem, changeItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'
import {ItemContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'

const initialState = {title: '', description: '', price: '', category: 'seed', photo: ''}

export const ItemForm = () => {
	
	const {items, addItem, updateItem, currentId, setCurrentId} = React.useContext(ItemContext)
	
	const {itemForm, closeItemForm} = React.useContext(OpenContext)
	
	const ref = React.useRef()
	const dispatch = useDispatch()
	const [source, setSource] = React.useState(initialState)
    //const user = JSON.parse(localStorage.getItem('profile'))
    // const currItem = useSelector(state =>  state.items.items.find((item) => 
    //                             item._id === currentId))
    const currItem = items.find((item) => item._id === currentId)
    
    React.useEffect(()=>{
		
	       	   if(currItem)setSource(currItem)
								 
	       },[currItem])
	       
    const reset =()=> {	
		setCurrentId(null)
		setSource(initialState)
		ref.current.reset()
		}
		
	const handSubmit =(e)=> {
		e.preventDefault()
		if(!currentId){addItem(source)
		}else{updateItem(currentId, source)
		 }
		 console.log(source)
		reset()
		closeItemForm()
		}
	
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	
	 return(
	 <section style={{'display': !itemForm ?'none':'block'}}>
	 <h2>Item</h2>
	<form style={{'width':'20%'}}ref={ref}>
	 <label>Title:</label>
	 <input name='title' 
	 value={source.title||''}    
	 onChange={handChange}/>
	 
	 <label>Description:</label>
	 <input name='description'
	 value={source.description||''} 
	 onChange={handChange}/>
	 
	 <label>Price:</label>
	 <input name='price'
	 value={source.price||''} 
	 onChange={handChange}/>
	 
	 <label>Category:</label>
	 <select name='category'
	         value={source.category}
	         onChange={handChange}>
	 <option value='seed'>seed</option>
	 <option value='soil'>soil</option>
	 <option value='pesticide'>pesticide</option>
	 </select>
	 
	 <label>Photo:</label>
      <FileBase 
                         type="file"
                         multiple={false}
                         onDone={({base64})=>setSource({
                            ...source, photo: base64})}/>
                            
	 <button onClick={handSubmit}>Save</button>
	 <button onClick={closeItemForm}>closeForm</button>
	</form>
	 </section>
	 )
	}
