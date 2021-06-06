export class LoginModel {
    Email:string;
    Password:string;
}
export class LoginResponseModel{
    success:boolean;
    token:string;
    message:string;
    userName:string;
}
