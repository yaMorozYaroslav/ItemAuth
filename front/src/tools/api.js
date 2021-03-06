import axios from 'axios'

const API = axios.create({baseURL: 'https://item-back.herokuapp.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const fetchItems =()=> API.get('/items')
export const createItem =(itemData)=> API.post('/items', itemData)
export const editItem =(id, editedItem)=> 
                                     API.patch(`/items/${id}`, editedItem)
export const deleteItem =(id)=>API.delete(`/items/${id}`)

export const auth =(source)=>API.post('/user/signin', source)
export const register =(source)=>API.post('/user/signup', source)