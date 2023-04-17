import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllItems, fetchItems} from '../Redux/itemsSlice'
import {ItemExcerpt} from './ItemExcerpt'

   
export const ItemsList = ({setCurrentId, opened, setOpened, itemFilter}) => {
	const dispatch = useDispatch()
	const items = useSelector(selectAllItems)
	const itemStatus = useSelector(state => state.items.status)
	const error = useSelector(state => state.items.error)
	
	const filteredItems = items.filter((item)=>{
		if(itemFilter === 'cheap'){return item.price < 5000}
		if(itemFilter === 'expansive'){return item.price > 5000}
		return item
		})
		
	React.useEffect(()=> {
		if(itemStatus === 'idle'){
			dispatch(fetchItems())
			}
		},[items, itemStatus, dispatch])
	
	let content
	
	if(itemStatus === 'loading'){
		content = <p>loading</p>
		}else if (itemStatus === 'succeeded'&&items){
		const orderedItems = filteredItems.slice().sort((a, b) =>
		                                   b.createdAt.localeCompare(a.createdAt))
		//const filtered = items.filter(item => item.price >  3000)
		//console.log(filtered)
		 console.log(orderedItems)
		 content = orderedItems.map(item => (
			   <ItemExcerpt 
			           key={item._id} 
			           item={item}
			           setCurrentId={setCurrentId}
			           opened={opened}
			           setOpened={setOpened} />
			))
			} else if (itemStatus === 'failed') {
				content = <div>{error}</div>
				}
		 return(
		    <section>
		       {content}
		    </section>
		 )
	}
