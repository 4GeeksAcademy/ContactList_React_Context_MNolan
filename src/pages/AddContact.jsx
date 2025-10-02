import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContact } from "../components/FormContact";
//const { contactId } = useParams();
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


//import { Home } from "./Home.jsx";
//export const AddContact = () => {
function AddContact() {
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate();

  const [newContact, setNewContact] = useState({
    "name": "",
    "phone": "",
    "email": "",
    "address": "",
    "id": 0
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };
  

  function addContacts() {
    if (!newContact.name || !newContact.phone) {
      console.error("Faltan campos obligatorios");
      return;
    }


    fetch(`https://playground.4geeks.com/contact/agendas/cenicerolleno/contacts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error en la petición POST");
        console.log(response);
        return response.json()
      })
      .then((data) => {
        console.log("Este es el log del POST", data)
        dispatch({ type: "ADDCONTACT", payload: data });
        setNewContact({ name: "", phone: "", email: "", address: "" });
        navigate("/");
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }

  return (
    <>
      <div className="container mt-2 text-center">
        <h1>Add contact Page</h1>
        <Link to="/">
          <button className="btn btn-primary">Go Home</button>
        </Link>

        {/*<button className="btn btn-primary"
          onClick={() => {
            console.log("holi, estoy agregando un contacto");
            navigate("/");

          }}
        >Add Contact</button>
        <FormContact />*/}
        <FormContact
          titulo={store.titleAdd}
          contact={newContact}
          onChange={handleChange}
          onSubmit={addContacts}

        />
        {/*<button 
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            addContacts();
          }}
        >
          Add
        </button>*/}
      </div>
    </>
  )

}

export default AddContact