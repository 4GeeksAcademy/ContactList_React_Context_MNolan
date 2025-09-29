import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Info = () => {
    const { store, dispatch } = useGlobalReducer()
    console.log(store.saludo);
    
    return (
        <div className='container mt-3 p-2 bg bg-secondary text-white'>
        <div>{store.saludo}</div>
        <input className='form-control' type="text" 
        onChange={(event)=>{
            setSaludo(event.target.value)
        }}
        />
        
        </div>
    )
}
