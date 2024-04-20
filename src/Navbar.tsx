import {Globals} from "./Common/globals.ts";
import {useEffect, useState} from "react";

export function Navbar() {

    const [state, setState] = useState(false)

    function readLocalStorage() {
        if (Globals.isLoggedIn) {
            setState(true)
        }
    }

    useEffect(() => {
        return readLocalStorage
    }, []);


    function logout() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg mb-5">
                <div className="container-lg d-flex justify-content-between bg-light">
                    <a className="nav-link" id="logoNavBarre" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-light" id="navbarNav">
                        <ul className="navbar-nav">
                            {state ?
                                // logged in
                                <div>
                                    <a className="nav-link" href="/logout" onClick={logout}>logout</a>
                                </div> :

                                // not logged in
                                <>
                                    <li>
                                        <a className="nav-link" href="/login">Login</a>
                                        <a className="nav-link" href="/logout" onClick={logout}>logout</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}