import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Publish from "./Publish";
import Activity from "./Activity";
import './../stylesheets/Navbar.css';

function Navbar() {
	const [isLogged, setIsLogged] = useState(false);

	return (
	<>
<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-left">
            <li><a href="#">Left</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-center">
            <li><a href="#">Center 1</a></li>
            <li><a href="#">Center 2</a></li>
            <li><a href="#">Center 3</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Right</a></li>
        </ul>
    </div>
</nav>

  </>
  );
}

export default Navbar;
