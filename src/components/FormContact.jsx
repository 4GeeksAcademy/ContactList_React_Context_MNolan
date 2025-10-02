import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export const FormContact = ({ titulo, contact, onChange, onSubmit }) => {
  //const { store, dispatch } = useGlobalReducer();
  //console.log(store.titles[0]);
  
  const navigate = useNavigate();
    return (
      <>
      
             <div className="container mt-2 d-flex justify-content-center">
    
               <div className="card mt-5 mx-5 d-flex justify-content-center" >

                 <h1 className="card-title text-center mt-2 p-3">{titulo}</h1>
                 <div className="card-body">
                   <form
                      onSubmit={(event) => {
                      event.preventDefault();
                      onSubmit();
                      }}
                   >
                     <div className="mb-3">
                       <label htmlFor="contactName" className="form-label">
                        Full Name
                        </label>
                       <input 
                          type="text" 
                          className="form-control" 
                          id="contactName"
                          name="name"
                          value={contact.name}
                          onChange={onChange}
                          required 
                        />
                     </div>
                     <div className="mb-3">
                       <label htmlFor="InputEmail" className="form-label" >Email address</label>
                       <input 
                          type="email" 
                          className="form-control" 
                          id="InputEmail" 
                          name="email"
                          value={contact.email}
                          onChange={onChange}
                          placeholder="name@example.com" 
                        />
       
                     </div>
       
                     <div className="mb-3 ">
                       <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                       <input 
                          type="number" 
                          className="form-control no-arrows" 
                          id="phoneNumber" 
                          name="phone"
                          value={contact.phone}
                          onChange={onChange}
                          placeholder="000000000"  
                          required 
                        />
                     </div>
                     <div className="mb-3">
                       <label htmlFor="address" className="form-label">Address</label>
                       <input 
                          type="text" 
                          className="form-control" 
                          id="address"
                          name="address"
                          value={contact.address}
                          onChange={onChange}
                        />
                     </div>
                     <div className="footer d-flex justify-content-center mb-3">
                       <button 
                          type="submit" 
                          className="btn btn-primary"
                          //onClick={() => {
                            //console.log("holi, estoy guardando un contacto");
                            /*navigate("/");
                           }}*/>Save</button>
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