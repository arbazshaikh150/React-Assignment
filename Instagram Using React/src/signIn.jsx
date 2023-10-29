// SignIn page
import Instagram from "./instaLogo.jsx"
import { useState } from "react";
import SignInInput from "./signInInside.jsx";
import SignUpInside from "./signUpInside.jsx";
function SignIn(isLoggin){
    const [isLoggedIn , setIsLoggedIn] = useState(true);
    return (
        <div className="wrapper">
         <Instagram></Instagram>

         {isLoggedIn ? <SignInInput/> : <SignUpInside/>}
        
         <button id="signInButton" onClick={() => {
            {setIsLoggedIn(!isLoggedIn)};
         }}>{isLoggedIn ? "Sign In" :  "Sign Up "}</button>

        <span className="sp">  {isLoggedIn ? "Don't have an account? " : "have an account? "}
        <a href="">{isLoggedIn ? "Sign Up" : "Sign In"}</a>
        </span>

        {/* SignUp Page */}

        </div>
    )
}

export default SignIn;