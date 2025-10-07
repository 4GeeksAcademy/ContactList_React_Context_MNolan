import { React, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FormContact } from "../components/FormContact";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

//export const EditContact = () => {
const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const {idContact} = useParams();
    const navigate = useNavigate();
    //const title = "Edit Contact";
    console.log(idContact);
    //console.log(store.titles[0]);
    const [contactToEdit, setContactToEdit] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        id: 0
     });

     useEffect(()=>{
        if(store.contactList.length > 0) {
            const selected = store.contactList[0];
            setContactToEdit(selected);
        } 
        /*fetch(`https://playground.4geeks.com/contact/agendas/cenicerolleno/contacts/${id}`)
        .then((response) =>{
            if(!response.ok) throw new error("Error al obtener contacto");
            return response.json();
        })
        .then((data) =>{
            console.log("Contacto para editar:", data);
            setContactToEdit(data);
            
        })
        .catch((error) => console.log("Error al cargar contacto:", error));*/
     }, [store.contactList]);

     const handleChange = (event) => {
        const { name, value } = event.target;
        setContactToEdit({
        ...contactToEdit,
        [name]: value,
        });
    };

    function updateContact() {

        fetch(`https://playground.4geeks.com/contact/agendas/cenicerolleno/contacts/${contactToEdit.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactToEdit),
        })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la petición PUT");
            return response.json();
        })

        .then((data) => {
            console.log("Contacto actualizado:", data);
            dispatch({
                type: "EDITCONTACT",
                payload: { id: contactToEdit.id, updateContact: data },
            });
            navigate("/");
            
        })

        .catch((error) => console.error("Error actualizando contacto:", error));
    
    };

    return (
        <div className="container mt-3 text-center">
            <h1>{store.titleEdit}</h1>
            <p>IdContacto a Editar: {contactToEdit.id}</p>
            <FormContact
                titulo={store.titleEdit}
                contact={contactToEdit}
                onChange={handleChange}
                onSubmit={updateContact}
              
            />
            <Link to="/">
                <button className="btn btn-primary">Go Home</button>
            </Link>
        </div>
    )
}

export default EditContact;