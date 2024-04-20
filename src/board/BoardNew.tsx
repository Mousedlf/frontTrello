import axiosHttp from "../auth/interceptor.ts";
import {useState} from "react";
import {Globals} from "../Common/globals.ts";
import {useNavigate, useParams} from "react-router-dom";

export  function BoardNew() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();


   function createBoard(){
       const board = {name, description, visibility};
       axiosHttp.post(Globals.baseUrl+"board/create/"+id, board)
           .then((response) => {
               console.log(response.data)
               navigate("/board/showAll/"+id)

           })
   }


    return (
        <>
            <h1>New board</h1>
            <div className="d-flex flex-column gap-1">
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="">
                    <p>Visibility</p>
                    <label htmlFor="1">Public</label>
                    <input type={"radio"}
                           placeholder="Public"
                           name={"type"}
                           value="1"
                           checked
                           onChange={(e) => setVisibility(e.target.value)}
                    />


                    <label htmlFor="2">Private</label>
                    <input type={"radio"}
                           placeholder="Private"
                           name={"type"}
                           value="2"
                           onChange={(e) => setVisibility(e.target.value)}
                    />

                    <label htmlFor="3">Team</label>
                    <input type={"radio"}
                           placeholder="Team"
                           name={"type"}
                           value="3"
                           onChange={(e) => setVisibility(e.target.value)}
                    />

                </div>


            </div>


            <button onClick={createBoard}>OK</button>


        </>
    );
}