import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FormContact } from "../components/FormContact";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

//export const EditContact = () => {
const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const {idContact} = useParams();
    //const title = "Edit Contact";
    console.log(idContact);
    //console.log(store.titles[0]);
    

    return (
        <div className="container mt-3 text-center">
            <h1>Edit contact Page </h1>
            <p>IdContacto a Editar: {idContact}</p>
            <FormContact
              titulo={store.titleEdit}
              
            />
            <Link to="/">
                <button className="btn btn-primary">Go Home</button>
            </Link>
        </div>
    )
}

export default EditContact;