import Login from './../../Components/Login/Login.js';
import Header from './../../Components/Header/Header.js';
import Footer from './../../Components/Footer/Footer.js';
import './../../Resources/Styles/Login.css';
import React from 'react';

function LoginPage() {
    return (
	<React.Fragment>
	  <Header />
	  <Login />
	  <Footer />
	</React.Fragment>
  );
}

export default LoginPage;
