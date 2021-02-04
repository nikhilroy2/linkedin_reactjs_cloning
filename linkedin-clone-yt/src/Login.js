import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';
function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const LoginToApp = (e) => {
        e.preventDefault()
    }
    const register = () => {
        if(!name){
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password).then(userAuth=> {
            userAuth.user
                .updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                .then(()=> {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })
        }).catch(error=> console.log(error))
    }
    return (
        <div className="login">
            <img src="http://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-Linkedin_Logo.svg__1.png?itok=q_lR0Vks"
                alt="" />
            <form action="">
                <input value={name} onChange={e=> setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />
                <input value={profilePic} onChange={e=> setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
                <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={e=> setPassword(e.target.value)} type="password" name="" placeholder="Password" id="" />
                <button type="submit" onClick={LoginToApp}>Sign In</button>
            </form>
            <p>
                Not a member ? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
