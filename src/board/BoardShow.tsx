import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Board} from "../interface/Board.tsx";
import axiosHttp from "../auth/interceptor.ts";
import {Globals} from "../Common/globals.ts";
import {List} from "../interface/List.tsx";
import {Card} from "../interface/Card.tsx";

export function BoardShow() {

    const [board , setBoard] = useState<Board>();
    const [cardName, setCardName] = useState("");
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {

        axiosHttp.get(Globals.baseUrl+"board/show/" + id)
            .then((response) =>{
                console.log(response.data)
                setBoard(response.data)
            })
    }, [id]);


    async function createCard(listId:any){
        await axiosHttp.post(Globals.baseUrl+'card/create/'+listId, {"name":cardName})
            .then((response) => {
                console.log(response.data);

                location.reload()

            })
    }

    if(board){
        return (
            <>

                <div className="text-center">
                    <h1>{board.name}</h1>
                    <p>{board.description}</p>
                    <button className={"mb-4"} onClick={() => {
                        navigate("/list/create/" + board.id)
                    }}>Ajouter une liste
                    </button>
                </div>


                <div className="cards row ">
                    {board.lists.map((list: List) => (
                        <div key={list.id} className="card col-3 me-1">


                            <div className="pb-2">
                                <h3>{list.name}</h3>

                                <div className="newCard">
                                    <input
                                        className="cardCreation"
                                        type="text"
                                        placeholder="Add card"
                                        onChange={(e) => setCardName(e.target.value)}
                                    />
                                    <button onClick={() => createCard(list.id)}>OK</button>
                                </div>

                                <div className="cards row ">
                                    {list.cards.map((card: Card) => (
                                        <div key={card.id} className=" mb-1  border-bottom border-1">
                                            <p className={"fw_bold"}>{card.name}</p>
                                            <p>{card.description}</p>


                                        </div>
                                    ))}
                                </div>


                            </div>


                        </div>
                    ))}
                </div>

            </>
        );
    }


}