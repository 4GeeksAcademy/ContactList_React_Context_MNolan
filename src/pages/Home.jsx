import { React, useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate,useParams } from "react-router-dom";
import { Card } from "../components/Card.jsx";
//import { ConfirmModal } from "./ConfirmModal";
export const Home = () => {
	const navigate = useNavigate();
	const { store, dispatch } = useGlobalReducer()
	const { idContact } = useParams();
	
	//console.log(store);
	const [contact, setContact] = useState({
		"name": "",
      	"phone": "",
      	"email": "",
      	"address": "",
      	"id": 0 
	});
	const [newContact, setNewContact] = useState("")


  

  // renderiza store.contactList ...

	/*useEffect(() => {
		setContact(store.contact);
	}, [store.contact]);*/

	function getContact() {
		
		return fetch("https://playground.4geeks.com/contact/agendas/cenicerolleno/contacts")
			.then((response) => {
				console.log(response);
				return response.json()
			})
			.then((data) => {
				
				console.log("Este es el log del GET", data.contacts);
				return data.contacts ;

			})
			.catch((error) => console.error("Error fetching contacts:", error));
	}
	/*function deleteContact(id) {
		return fetch(`https://playground.4geeks.com/contact/agendas/cenicerolleno/contacts/${id}`,{
			method: "DELETE"
		})
		.then((data)=>{
			console.log("Este es el log del DELETE", data.contacts);
			return data.contacts;
		})
		.catch((error) => console.error("Error fetching contacts:", error));
	}*/
	useEffect(() => {

		getContact().then(response => {
			dispatch({ type: "SETCONTACTS", payload: response })
		console.log("Esto son los datos del useEffect", response)
	})

	}, []);

	//console.log(contact);
	return (
		<div className="text-center mt-5">
			<h1>Contact List de "{store.user}"</h1>


			{/*<Link to="/add-contact">
				<button className="btn btn-success">Add Contact</button>
			</Link>*/}
			<Link to={`/edit-contact/${store.contact[0].id}`}>
				<button className="btn btn-primary ml-2">Edit Contact</button>
			</Link>

			<div>{store.contactList && store.contactList.map((c) => (
				
					<Card 
						key={c.id}
						id={c.id}
						name={c.name} 
						email={c.email} 
						phone={c.phone} 
						address={c.address} />
					
			))}</div>

			
		</div>
		
	);
}; 