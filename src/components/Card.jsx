import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Card = () => {
  const { store, dispatch } = useGlobalReducer()
  return (
    <div className="card min-vw-100 max-h-15">
      <div className='card-body'>
        <div className='row p-2'>
          <div className="col-9 d-flex justify-content-center align-items-center">
            <img src={`https://avatar.iran.liara.run/username?username=${store.contact[0].name}`} className='col-6 pe-2 img-fluid' />
            
            <ul>
              <li><b>{store.contact[0].name}</b></li>
              <li><i className="fa-solid fa-at"/>{store.contact[0].email}</li>
              <li><i className="fa-solid fa-phone-flip"/>{store.contact[0].phone}</li>
              <li><i className="fa-solid fa-location-dot"/>{store.contact[0].address}</li>
            </ul>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-top">
            <i className="fa-solid fa-pen" />
            <i className="fa-solid fa-trash-can ms-3" />
        </div>
      </div>
    </div>
    </div>
  )
}
