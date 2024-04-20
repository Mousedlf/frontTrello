import {Board} from "../interface/Board.tsx";
import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {Globals} from "../Common/globals.ts";
import {useNavigate, useParams} from "react-router-dom";

export function BoardIndex() {

    const [boards, setBoards] = useState<Board[]>([]);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {

        axiosHttp.get(Globals.baseUrl + "board/showAll/" + id)
            .then(response => {
                console.log(response)
                setBoards(response.data)
            })

    }, [id]);


    if (boards) {
        return (

            <>

                <button onClick={()=> navigate("/board/create/"+ id)}>Ajouter board</button>
                <div className="cards row ">
                    {boards.map((board: Board) => (
                        <div key={board.id} className="card col-4">
                            <h2>{board.name}</h2>
                            <p>{board.description}</p>
                            <p>{board.visibility.name}</p>
                            <button onClick={() => navigate("/board/" + board.id)}> Voir plus</button>
                        </div>
                    ))}
                </div>

            </>
        );
    }
}