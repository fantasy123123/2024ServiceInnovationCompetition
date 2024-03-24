import axios from "axios";

export function registerWithAccount(name,psw,email){
    axios({
        method:'post',
        url:'/accountRegister',
        data:{
            "username": name,
            "email": email,
            "password": psw,
        }
    }).then(
        res=>{console.log(111)},
        error=>{console.log(222)}
    )
}