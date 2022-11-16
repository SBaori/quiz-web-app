import React from "react";

function SignIn() {
    return (
        <div className="signIn-container">
            <div className="signIn-form">
                <h1>Sign In</h1>
                <form action="/signin" method="post">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" >Sign In</button>
                </form>

                <div className="signIn-form__forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;