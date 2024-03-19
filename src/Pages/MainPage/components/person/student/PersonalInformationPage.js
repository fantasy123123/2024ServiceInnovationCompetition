import {Avatar, Button, Upload} from "@arco-design/web-react";
import {IconMan, IconUpload,IconWoman} from "@arco-design/web-react/icon";
import { Link, Outlet } from "react-router-dom";
import student from '../image/student.png'
import firm from '../image/firm.png'

const user={
    name:'DIONG',
    identity:'student',
    sex:'男',
    year:19,
    graduationYear:2026,
    education:'本科',
    intention:'算法工程师',
    school:'中南大学',
    profession:'计算机科学与技术'
}
const PersonalInformationPage=()=>{
    return (
        <>
            <Outlet />
            <div style={{margin:'auto',marginTop:30,backgroundColor:'white',width:'50%',height:140,borderRadius:20,position:'relative'}}>
                <Link to={'/main/student_information/edit'} style={{textDecoration:'none'}}>
                    <Button style={{zIndex:'1',display:'flex',justifyContent:'center',alignItems:'center',color:"white",fontSize:17,width:90,height:35,backgroundColor:'rgba(60,192,201,100%)',borderRadius:3,position:'absolute',right:30,top:15}}>
                        编 辑
                    </Button>
                </Link>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%',height:'100%'}}>
                    <div style={{display:'flex'}}>
                        <Avatar size={64}>
                            <img
                                alt='avatar'
                                src={user.identity==='student'?student:firm}
                            />
                        </Avatar>
                        <div style={{marginLeft:25}}>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{fontSize:22,marginRight:15}}>{user.name}</div>
                                {user.sex==='男'?<IconMan />:<IconWoman />}
                            </div>
                            <div style={{display:'flex',color:'grey'}}>
                                <div>{user.year}岁</div>
                                <div>&nbsp;|&nbsp;</div>
                                <div>{user.graduationYear}届</div>
                                <div>&nbsp;|&nbsp;</div>
                                <div>{user.education}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginRight:200,width:200}}>
                        <div>期望:{user.intention}</div>
                        <div style={{display:'flex',marginTop:5}}>
                            <div>{user.school}</div>
                            <div>&nbsp;|&nbsp;</div>
                            <div>{user.profession}</div>
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