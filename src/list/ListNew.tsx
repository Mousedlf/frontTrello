import {useNavigate, useParams} from "react-router-dom";
import axiosHttp from "../auth/interceptor.ts";
import {Globals} from "../Common/globals.ts";
import {useState} from "react";

export function ListNew() {

    const [name,setName] = useState("");
    const navigate = useNavigate();

    const {id} = useParams()

    async function createList(){
        const list = {name};
        await axiosHttp.post(Globals.baseUrl+'list/create/'+id, list)
            .then((response) => {
                console.log(response.data);

                navigate("/board/"+id)
            })
    }

    return (
        <>

            <h1>Ajouter une liste</h1>

            <div className="">
                <input type="text"
                       placeholder="name"
                       required={true}
                       onChange={(e) => setName(e.target.value)}
                       className="form-control"/>
                <br/>

                <button onClick={createList} className={"btn btn-outline-success"} type="submit">Create a
                    list
                </button>

                <br/>
            </div>

        </>
    );
}