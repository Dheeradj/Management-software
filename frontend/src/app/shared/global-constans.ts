export class GlobalConstants{
    // Message
    public static genericError:string = "Something went wrong, please try again later";
    public static unauthorized:string = "You're not authorized person to access this page";
    // ReGex
    public static nameRegex:string = "[a-zA-Z0-9 ]*";

    public static emailRegex:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex:string = "^[e0-9]{10,10}$";

    public static websiteRegex:string = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

    // variable 
    public static error: string = "error";
    

}