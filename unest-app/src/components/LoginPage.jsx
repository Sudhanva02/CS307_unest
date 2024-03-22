import React, {useState} from 'react'
import './LoginPage.css'
import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/lock.png'
import person_icon from '../Assets/person.png'
import school_icon from '../Assets/school.png'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
export default function LoginPage() {
    const [action,setAction] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            await axios.post('/login', {email, password});
            alert('Login Successful!')
        } catch (e){
            alert('Login Failed, Please Try Again')
        }

    }
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/register';
        navigate(path);
    }
    return (
        <div className='outercontainer'>
            <div className='container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form className="inputs">
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder="Email" value={email}
                               onChange={ev=> setEmail(ev.target.value)}/>
                    </div>
                    <div className="input">
                        <img src={lock_icon} alt=""/>
                        <input type="password" placeholder="Password" value={password}
                               onChange={ev=> setPassword(ev.target.value)}/>
                    </div>
                </form>
                {action === "Sign Up" ? <div></div> :
                    <div className="forgot-password">Forgot Password?
                        <Link className="psw" to={'/forgotpass'}>  Click Here</Link>
                    </div>}

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"}
                         onClick={routeChange}>Sign Up
                    </div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"}
                         onClick={handleLoginSubmit}>Login
                    </div>
                </div>
            </div>
        </div>
    );
}
