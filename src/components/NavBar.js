import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<NavLink
				to="/"
				className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
			>
				Home
			</NavLink>
			<NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
				About
			</NavLink>
			<NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
				Login
			</NavLink>
		</nav>
	);
}

export default NavBar;
