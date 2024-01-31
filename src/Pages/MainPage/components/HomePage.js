import {Button, Input} from "@arco-design/web-react";

const HomePage=()=>{
    return <>
        <div style={{display:'flex',marginTop:30,justifyContent:'center'}}>
            <Input  placeholder='搜索职位、公司'
                    style={{ backgroundColor:'white',width: 650,height:45, border:'solid 1px rgba(60,192,201,100%)',borderRadius:'5px 0px 0px 5px'}}/>
            <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',width:100,height:45,fontSize:17,borderRadius:'0px 5px 5px 0px'}}>搜 索</Button>
        </div>
    </>
}

export default HomePage