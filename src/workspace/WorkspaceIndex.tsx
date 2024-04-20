import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Workspace} from "../interface/Workspace.tsx";
import axiosHttp from "../auth/interceptor.ts";
import {Globals} from "../Common/globals.ts";

export function WorkspaceIndex() {

    const [workspaces , setWorkspaces] = useState<Workspace[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axiosHttp.get(Globals.baseUrl+"index")
            .then((response) =>{
                setWorkspaces(response.data);
            })
    }, []);


    if (workspaces) {
        return (
            <div className="cards row ">
                {workspaces.map((workspace: Workspace) => (
                    <div key={workspace.id} className="card">
                        <h2>{workspace.name}</h2>
                        <p>{workspace.description}</p>
                        <button onClick={()=> navigate("/board/showAll/"+ workspace.id)}> Voir boards</button>
                    </div>
                ))}
            </div>
        );
    }
}