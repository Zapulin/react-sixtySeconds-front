import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Publish from "./Publish";
import Activity from "./Activity";

function Navbar() {
	const [isLogged, setIsLogged] = useState(false);

	return (
	<>
		<div class="b-example-divider"></div>

  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
  </>
  );
}

export default Navbar;
