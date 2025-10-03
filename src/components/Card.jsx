import { React, useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { Link, useNavigate, useParams } from "react-router-dom";
import { ConfirmModal } from "./ConfirmModal";

export const Card = (props) => {
 // const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const [showModal, setShowModal] = useState(false);
  const { idContact } = useParams();

  function deleteContact(id) {
    const URLPrinc = store.URLPattern;
    
		return fetch(`${URLPrinc}/agendas/cenicerolleno/contacts/${id}`,{
			method: "DELETE"
		})
		.then((response)=>{
			//console.log("Este es el log del DELETE", data.contacts);
			if (!response.ok) {
        throw new Error ("Error al eliminar contacto")
      }
        return response.json().catch(() => ({}));
		})
    .then(()=>{
      dispatch({ type: "DELETECONTACT", payload: { idToDelete: id } });
      console.log(`Contacto ${id} eliminado con éxito`);
      setShowModal(false);
    })
		.catch((error) => console.error("Error en el DELETE:", error));
	}

  return (
    <>
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
            <Link to={`/edit-contact/${props.id}`} className='decoration-none text-dark'>
            <i className="fa-solid fa-pen" onClick={() => {navigate(`/edit-contact/${idContact}`)}} />
            </Link>
            
            <i 
                className="fa-solid fa-trash-can ms-3"
                role='button'
                data-bs-toggle='modal'
                onClick={() => setShowModal(true)/*deleteContact(props.id)*/}
            />
          </div>
        </div>
      </div>
    </div>
      <ConfirmModal
        show={showModal}
        title="Delet Contact"
        message={`¿Seguro que quieres eliminar el contacto "${props.name}"?`}
        onConfirm={() => deleteContact(props.id)}
        onCancel={() => setShowModal(false)}
      />
    
      </>
  );
};
