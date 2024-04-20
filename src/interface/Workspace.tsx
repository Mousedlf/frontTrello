import {Board} from "./Board.tsx";

export interface Workspace {
    id:number
    name:string
    description:string
    owner:{
        username:string
    }
    members: [
        {
            username:string
        }
    ]

    boards : Board[]
}