import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export const FormContact = (props) => {
  const { store, dispatch } = useGlobalReducer();
  //console.log(store.titles[0]);
  
  const navigate = useNavigate();
    return (
      <>
      <h1>Algo</h1>
             <div classNameName="container mt-5 d-flex justify-content-center">
    
               <div className="card mt-5 mx-5 d-flex justify-content-center" >

                 <h1 className="card-title text-center mt-5 p-3">{props.titulo}</h1>
                 <div className="card-body">
                   <form>
                     <div className="mb-3">
                       <label for="contactName" className="form-label">Full Name</label>
                       <input type="text" className="form-control" id="contactName" required />
                     </div>
                     <div className="mb-3">
                       <label for="InputEmail" className="form-label" >Email address</label>
                       <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" />
       
                     </div>
       
                     <div className="mb-3 ">
                       <label for="phoneNumber" className="form-label">Phone Number</label>
                       <input type="number" className="form-control no-arrows" id="phoneNumber" placeholder="000000000" min="10000000" max="999999999999" required />
                     </div>
                     <div className="mb-3">
                       <label for="address" className="form-label">Address</label>
                       <input type="text" className="form-control" id="address" />
                     </div>
                     <div className="footer d-flex justify-content-center mb-3">
                       <button type="submit" className="btn btn-primary"
                       onClick={() => {
                        console.log("holi, estoy guardando un contacto");
                        navigate("/");
                       }}>Save</button>
                     </div>
                     <Link to="/">
                       <span className="form-label">or get back to contacts</span>
                     </Link>
                     
                   </form>
                 </div>
       
               </div>

             </div>

       </>
   )
  }
//export default FormContact;