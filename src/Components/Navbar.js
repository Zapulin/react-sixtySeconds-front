import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Publish from "./Publish";
import Activity from "./Activity";

function Navbar() {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<header>
			{ /* TODO: add logo */ }
			<form>
				<input type="text" placeholder="Search..." required></input>
				<button type="submit"></button>
			</form>
			{ isLogged ? (
				<ul>
					<li><Publish /></li>
					<li><Link to="/feed">Home{  /* TODO: add home icon */ }</Link></li>
					<li><Activity /></li>
					<li><Link to="/profile/1">Profile{  /* TODO: add user pic */ }</Link></li>
				</ul>
			) : (
				<ul>
					<li><Login /></li>
					<li><Signup /></li>
				</ul>
			) }
		</header>
  );
}

export default Navbar;
