import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { Link, useNavigate, useParams } from "react-router-dom";
export const Card = (props) => {
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate();
  const { idContact } = useParams();
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className='row w-100'>
          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
            <img src={`https://avatar.iran.liara.run/username?username=${props.name}`} 
            className="col-6 p-2" />
          </div>
          <div className="text-start col-lg-4 col-9" >
            <ul className="list-unstyled">
              <li><b>{props.name}</b></li>
              <li><i className="fa-solid fa-at" />{props.email}</li>
              <li><i className="fa-solid fa-phone-flip" />{props.phone}</li>
              <li><i className="fa-solid fa-location-dot" />{props.address}</li>
            </ul>
          </div>
          <div className="col-lg-4 col-3 d-flex justify-content-end align-items-top">
            <Link to="/edit-contact" className='decoration-none text-dark'>
            <i className="fa-solid fa-pen" onClick={() => {navigate(`/edit-contact/${idContact}`)}} />
            </Link>
            
            <i className="fa-solid fa-trash-can ms-3" />
          </div>
        </div>
      </div>
    </div>
  )
}
