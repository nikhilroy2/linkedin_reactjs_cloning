import React from 'react'
import './Login.css'
function Login() {
    const register = ()=> {
        
    }
    return (
        <div className="login">
            <img src="http://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-Linkedin_Logo.svg__1.png?itok=q_lR0Vks"
             alt=""/>
             <form action="">
                 <input type="text" placeholder="Full name (required if registering)"/>
                 <input placeholder="Profile pic URL (optional)" type="text"/>
                 <input placeholder="Email" type="email"/>
                 <input type="password" name="" placeholder="Password" id=""/>
                 <button>Sign In</button>
             </form>
             <p>
                 Not a member ? 
                 <span className="login__register" onClick={register}>Register Now</span>
             </p>
        </div>
    )
}

export default Login
