import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
//import EditContact from "./EditContact.jsx";
//import AddContact from "./AddContact.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
				
			</p>
			<Link to="/add-contact">
				<button className="btn btn-success">Add Contact</button>
			</Link>
			<Link to="/edit-contact">
				<button className="btn btn-primary ml-2">Edit Contact</button>
			</Link>
		</div>
	);
}; 