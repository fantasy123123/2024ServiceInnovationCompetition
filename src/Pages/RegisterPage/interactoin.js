import axios from "axios";

export function registerWithAccount(name,psw,email){
    axios({
        method:'post',
        url:'http://100.67.123.83:5000/users/register-with-account',
        data:{
            "username": name,
            "email": email,
            "password": psw,
        }
    }).then(
        res=>{console.log(111),
            console.log(res)},
        error=>{console.log(222),
            console.log(error)}
    )
}
