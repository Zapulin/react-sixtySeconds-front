function Signup() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center p-4">
        <form name="signup" method="POST" action="signup.php">
          <fieldset>
            <legend>Registration form</legend>
            <br />
            <label>
              First name: <input name="firstName" type="text" required></input>
            </label>
            <br />
            <label>
              Last name: <input name="lastName" type="text" required></input>
            </label>
            <br />
            <label>
              Email: <input name="email" type="text" required></input>
            </label>
            <br />
            <label>
              Username: <input name="username" type="text" required></input>
            </label>
            <br />
            <label>
              Password: <input name="password" type="password" required></input>
            </label>
            <br />
            <label>
              Repeat Password:{" "}
              <input name="repeatedPassword" type="password" required></input>
            </label>
            <br />
            <label>
              Date of birth:{" "}
              <input name="birthday" type="date" required></input>
            </label>
            <br />
            <input type="submit" value="Sign up"></input>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Signup;
