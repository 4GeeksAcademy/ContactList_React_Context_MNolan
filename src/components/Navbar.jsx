import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav class="navbar bg-body-tertiary bg-light p-3">
  			<div class="container-fluid d-flex justify-content-between">
				<Link to="/">
					<div className="navbar-brand mb-0 h1">Contact List</div>
				</Link>
				<div className="ml-auto">
					<Link to="/add-contact">
						<button className="btn btn-success">Add New Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};