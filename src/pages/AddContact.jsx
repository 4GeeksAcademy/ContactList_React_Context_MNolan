import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContact } from "../components/FormContact";
//import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


//import { Home } from "./Home.jsx";
function AddContact() {
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate();

  return (
    <>
    <div className="container mt-2 text-center">
      <h1>Add contact Page</h1>
      <Link to="/">
        <button className="btn btn-primary">Go Home</button>
      </Link>

      <button className="btn btn-primary"
        onClick={() => {
          console.log("holi, estoy agregando un contacto");
          navigate("/");

        }}
      >Add Contact</button>
      {/*<FormContact />*/}
      <FormContact
        titulo={store.titleAdd}
      />
    </div>
    </>
  )

}

export default AddContact