import {Avatar, Button, Divider, Message, Upload} from "@arco-design/web-react";
import {IconMan, IconUpload} from "@arco-design/web-react/icon";
import { Link, Outlet } from "react-router-dom";

const PersonalInformationPage=()=>{
    return (
        <>
        <Outlet />
            <div style={{margin:'auto',marginTop:30,backgroundColor:'white',width:'50%',height:140,borderRadius:20,position:'relative'}}>
                <Link to={'/main/personal/edit'} style={{textDecoration:'none'}}>
                    <Button style={{zIndex:'1',display:'flex',justifyContent:'center',alignItems:'center',color:"white",fontSize:17,width:90,height:35,backgroundColor:'rgba(60,192,201,100%)',borderRadius:3,position:'absolute',right:30,top:15}}>
                        编 辑
                    </Button>
                </Link>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%',height:'100%'}}>
                    <div style={{display:'flex'}}>
                        <Avatar size={64}>User</Avatar>
                        <div style={{marginLeft:25}}>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{fontSize:22,marginRight:15}}>DIONG</div>
                                <IconMan />
                            </div>
                            <div style={{display:'flex',color:'grey'}}>
                                <div>19岁</div>
                                <div>&nbsp;|&nbsp;</div>
                                <div>2026届</div>
                                <div>&nbsp;|&nbsp;</div>
                                <div>本科</div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginRight:200,width:200}}>
                        <div>期望:算法工程师</div>
                        <div style={{display:'flex',marginTop:5}}>
                            <div>中南大学</div>
                            <div>&nbsp;|&nbsp;</div>
                            <div>计算机科学与技术</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:40}}>
                <Button style={{display:'flex',justifyContent:'center',alignItems:'center',color:"white",fontSize:17,left:'27%',width:150,height:40,backgroundColor:'rgba(60,192,201,100%)',borderRadius:3}}>
                    <IconUpload />
                    上传文件
                </Button>
                <div style={{margin:'auto',marginTop:10,backgroundColor:'white',width:'50%',borderRadius:20,padding:'25px 0px 25px 0px',marginBottom:10}}>
                    <Upload
                        drag
                        multiple
                        action='/'
                        style={{width:'70%',position:'relative',left:'15%'}}
                    />
                </div>
            </div>
        </>
    )
}

export default PersonalInformationPage