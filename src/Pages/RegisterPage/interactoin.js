import axios from "axios";

export function registerWithAccount(name,psw,email){
    axios({
        method:'post',
        url:'http://192.168.43.189:5000/users/register-with-account',
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
