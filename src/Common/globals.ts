export class Globals{
    public static token = localStorage.getItem("bearerToken")
    public static baseUrl = "https://trello.thibautstachnick.com/api/" //https://trelloapi.dlfcaroline.online/api/

    public static isLoggedIn :boolean = localStorage.getItem("bearerToken") !== null

}