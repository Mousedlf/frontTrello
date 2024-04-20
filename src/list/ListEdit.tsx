import {useNavigate, useParams} from "react-router-dom";
import axiosHttp from "../auth/interceptor.ts";
import {Globals} from "../Common/globals.ts";
import {useEffect, useState} from "react";

export function ListEdit() {

    const [name,setName] = useState("");
    const navigate = useNavigate();

    const {id} = useParams()


    useEffect(() => {

        axiosHttp.get(Globals.baseUrl+'list/show/'+id)
            .then((response) => {
                setName(response.data.name)
            })
    }, [id]);

   async function editList(listId:any){
            await axiosHttp.put(Globals.baseUrl+'list/edit/'+listId, {
            "name":name
        })
            .then((response) => {
                console.log(response.data);
                // marche pas... ?
            })
    }

    return (
        <>

            <h1>Modifier la liste</h1>

            <div className="">
                <input type="text"
                       placeholder={name}
                       required={true}
                       onChange={(e) => setName(e.target.value)}
                       className="form-control"/>
                <br/>

                <button onClick={()=>editList(id)} className={"btn btn-outline-success"} type="submit">OK</button>

                <br/>
            </div>

        </>
    );
}