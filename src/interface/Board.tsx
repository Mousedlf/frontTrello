import {List} from "./List.tsx";

export interface Board {
    id:number
    name:string
    description: string
    visibility: number
    lists: List[]
}