import {Route, Routes} from "react-router-dom";
import {UserManager} from "./UserManager.tsx";
import App from "./App.tsx";

export const Router = ()=>{
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<App />}
                />
                <Route
                    path='/register'
                    element={<UserManager />}
                />
                <Route
                    path='/login'
                    element={<UserManager />}
                />
            </Routes>
        </>
    )
}