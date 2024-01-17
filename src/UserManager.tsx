import {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Globals} from "./Common/globals.ts";

export function UserManager() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const uri = window.location.pathname;
    const navigate = useNavigate()

    function checkUri(){
        return uri.includes("/register");
    }

    function isLoggged() {
        return !!localStorage.getItem("bearerToken");
    }

    function register() {
        const user = {username,password};
        axios.post(Globals.baseurl+"register",user)
            .then((response)=>{
                console.log(response.data["message"])
            })
        return navigate("/login")
    }

    async function login() {
        const user  = {username,password};
        await axios.post(Globals.baseurl+"token", user)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("bearerToken",response.data["access"])
                setTimeout(()=>{
                    navigate("/")
                    window.location.reload()
                },500)
            })
    }

    function logout() {
        localStorage.removeItem("bearerToken");
        window.location.reload();
    }


    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-3 align-items-center">
                    {isLoggged() ?
                        <div>
                            <button onClick={logout} className="btn btn-primary">Logout</button>
                        </div> :

                        <div className="d-flex flex-column gap-3  w-100">
                            {checkUri() ?
                                <h1>Register</h1> :
                                <h1>Login</h1>
                            }

                            <div className="col-8">
                                <div className="d-flex flex-column  gap-2 w-100">
                                    <input type="text"
                                           placeholder="username"
                                           onChange={(e) => setUsername(e.target.value)}
                                           className="form-control"/>

                                    <input type="password" placeholder="password" className="form-control"
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>

                            </div>


                            {checkUri() ?
                                <div>
                                    <button onClick={register} className="btn btn-primary">Register</button>
                                </div> :
                                <div>
                                    <button onClick={login} className="btn btn-primary">Login</button>
                                </div>
                            }


                            {checkUri() ?
                                <p className="mt-5">Already an account? <a href="/login">Login here</a></p> :
                                <p className="mt-5">no account yet ? <a href="/register">Register here</a></p>
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    );
}