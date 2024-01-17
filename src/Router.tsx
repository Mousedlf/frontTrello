import {Page} from "./Page.tsx";
import {Route, Routes} from "react-router-dom";

export const Router = ()=>{
    return (
        <>
            <Routes>
                <Route path='page' element={<Page />} />
            </Routes>
        </>
    )
}