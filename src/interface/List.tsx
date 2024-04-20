import {User} from "./User.tsx";
import {Card} from "./Card.tsx";

export interface List  {
    id:number
    creator: User
    name:string
    cards: Card[]
}