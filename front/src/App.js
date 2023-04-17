import React from 'react'

import {Cart} from './Units/Cart'
import {CartForm} from './Units/CartForm'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

export const App =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	const [opened, setOpened] = React.useState({item: false, auth: false})
	const [itemFilter, setItemFilter] = React.useState('all')
	
	function onFilterSelected(filterValue){
		setItemFilter(filterValue)
		}
	
	return <>
	         <Cart/>
	         <CartForm/>
	         
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}
	                 opened={opened} setOpened={setOpened}/>
	                 
	         <Filter filterSelected={onFilterSelected}/>
	         
	         <ItemsList setCurrentId={setCurrentId} 
	                    opened={opened} setOpened={setOpened}
	                    itemFilter={itemFilter}/>
	       </>
	}
