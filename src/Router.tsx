import {Route, Routes} from "react-router-dom";
import {UserManager} from "./UserManager.tsx";
import {BoardNew} from "./board/BoardNew.tsx";
import {WorkspaceIndex} from "./workspace/WorkspaceIndex.tsx";
import {BoardIndex} from "./board/BoardIndex.tsx";
import {BoardShow} from "./board/BoardShow.tsx";
import {ListNew} from "./list/ListNew.tsx";

export const Router = ()=>{
    return (
        <>
            <Routes>
{/* WORKSPACE ------------------------------------------------ */}
                <Route
                    path='/'
                    element={<WorkspaceIndex />}/>
{/* AUTH ------------------------------------------------ */}
                <Route
                    path='/register'
                    element={<UserManager />}/>
                <Route
                    path='/login'
                    element={<UserManager />}/>
                <Route
                    path='/logout'
                    element={<UserManager />}/>
{/* BOARD ------------------------------------------------ */}
                <Route
                    path='/board/showAll/:id'
                    element={<BoardIndex/>}/>
                <Route
                    path='/board/create/:id'
                    element={<BoardNew/>}/>
                <Route
                    path='/board/:id'
                    element={<BoardShow/>}/>
{/* LIST ------------------------------------------------ */}
                <Route
                    path='/list/create/:id'
                    element={<ListNew/>}/>
{/* CARD ------------------------------------------------ */}

            </Routes>
        </>
    )
}