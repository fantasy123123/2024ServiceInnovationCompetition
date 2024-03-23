import axios from "axios";

export function checkAccount(name,psw){
    axios({
        method:'post',
        url:'/accountLogin',
        data:{
            "login": name,
            "password": psw,
        }
    }).then(
        res=>{console.log(111)},
        error=>{console.log(222)}
    )
}