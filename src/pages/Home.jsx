import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
//import EditContact from "./EditContact.jsx";
//import AddContact from "./AddContact.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Info } from "../components/Info.jsx";
import { Card } from "../components/Card.jsx";
//import { FormContact } from "./FormContact.jsx";
export const Home = () => {
    const navigate = useNavigate();

  const {store, dispatch} =useGlobalReducer()
	 console.log(store.todos[0]);
	return (
		<div className="text-center mt-5">
			<h1>Contact List</h1>
			<Info />
			<Card/>
			<p>{store.todos[0].title}</p>
			
			<Link to="/add-contact">
				<button className="btn btn-success">Add Contact</button>
			</Link>
			<Link to="/edit-contact/65">
				<button className="btn btn-primary ml-2">Edit Contact</button>
			</Link>
		</div>
	);
}; 