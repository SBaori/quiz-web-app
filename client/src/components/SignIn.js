import React from "react";
import '../styles/SignIn.css';
import Axios from "axios";

function SignIn() {

    const [signIn_or_signUp, setSignIn_or_signUp] = React.useState({
        signIn: true,
        to: '/signin',
    });
    const [usernameReg,username] = React.useState("");
    const [pwdReg,password] = React.useState("");
    const [emailReg,email] = React.useState("");

    function axs()
    {
        Axios.post("http://localhost:8000",{
            name: usernameReg,
            pwd: pwdReg,
            email: emailReg
        }).then((res) => {console.log(res);}).catch((err) => {console.log(err);});
    }
    return (
        <div className="signIn-container">
            <div className="signIn-form">
                {signIn_or_signUp.signIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
                <form onSubmit={axs}>
                    <div className="form-group">
                        <input type="text" placeholder="Username" onChange={(e) => {username(e.target.value)}}/>
                        {!signIn_or_signUp.signIn && <input type="email" placeholder="Email" onChange={(e) => {email(e.target.value)}}/>}
                        <input type="password" placeholder="Password" onChange={(e) => {password(e.target.value)}}/>
                    </div>
                    {signIn_or_signUp.signIn ?
                        <p onClick={() => {
                            setSignIn_or_signUp({
                                signIn: false,
                                to: '/signup',
                            });
                        }}>Don't have an account?</p>
                        :
                        <p onClick={() => {
                            setSignIn_or_signUp({
                                signIn: true,
                                to: '/signin',
                            });
                        }}>Already have an account?</p>
                    }
                    <button type="submit">submit</button>
                </form>


            </div>
        </div>
    );
}

export default SignIn;