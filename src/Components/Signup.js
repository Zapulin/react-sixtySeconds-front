
function Signup() {
    return (
        <div className="signup">
            <form name="signup" method="POST" action="signup.php">
                <fieldset>
                    <legend>Registration form</legend>
                    <label>First name: <input name="firstName" type="text" required></input></label>
                    <label>Last name: <input name="lastName" type="text" required></input></label>
                    <label>Email: <input name="email" type="text" required></input></label>
                    <label>Username: <input name="username" type="text" required></input></label>
                    <label>Password: <input name="password" type="password" required></input></label>
                    <label>Repeat Password: <input name="repeatedPassword" type="password" required></input></label>
                    <label>Date of birth: <input name="birthday" type="date" required></input></label>
                    <input type="submit" value="Sign up"></input>
                </fieldset>
            </form>
        </div>
    );
}

export default Signup;
