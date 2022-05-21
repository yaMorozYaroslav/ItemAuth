import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form,
        Label, Input} from 'reactstrap'
import {useDispatch, connect} from 'react-redux'
import {authorization, registration} from '../actions/authAct'

const initialState = {name: '', email: '', password: ''}

const Auth =()=> {
	const dispatch = useDispatch()
	const [show, setShow] = React.useState(false)
	const [modal, setModal] = React.useState(false)
	const [registered, setRegistered] = React.useState(false)
	const [source, setSource] = React.useState(initialState)
    
    const handleShow =()=> setShow((showPassword)=> !showPassword)
    const handleSubmit =(e)=>{
    	e.preventDefault()
    	if(!registered){
    		dispatch(authorization(source))
    	}else{
    		dispatch(registration(source))
    	}
        handToggle()
    }
    const handleChange =(e)=> {
    	setSource({...source, [e.target.name]: e.target.value})
    }
    const handToggle =()=>setModal(isModal=>!isModal)
    const switchMode =()=> {
    	setRegistered((isRegistered)=>!isRegistered)
    	handleShow(false)
    }
    return(<div>
    	      <Button onClick={handToggle}>Authorization</Button>
    	    <Modal 
    	        isOpen={modal}
    	        toggle={handToggle}>
              <ModalHeader>
              {registered?'Login':'Registration'}
              </ModalHeader>
                <ModalBody>
                <Form onSubmit={handleSubmit}>
                   	<Label for="email">Email</Label>
                  	<Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className='mb-3'
                        onChange={handleChange}/>
                    <Label for="password">Password</Label>
                    <Input
                        type={!show?"password":"text"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className='mb-3'
                        onChange={handleChange} />
                    <Button 
                         onClick={handleShow}  
                         style={{display:'flex'}}>Show Password</Button>
                        {registered && (<>
                    }
                    <Label for="name">Name</Label>
                    <Input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className='mb-3'
                        onChange={handleChange}/>
                  	</>)}
                  	<Button type="submit">Submit</Button>
                  	<Button onClick={switchMode}>
                  	  {registered?"Switch to Login":"Switch to Registration"}
                  	</Button>
                </Form>
              </ModalBody>
             </Modal>
    	</div>)
}
export default connect(null, {authorization, registration})(Auth)