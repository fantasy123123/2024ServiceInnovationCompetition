import {Button, Message, Radio} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import './style/ApplyForJob.css'
import pin from './image/pin.png'
import clock from './image/clock.png'
import link from './image/link.png'
import proFile from './image/profile.png'
import graduation from './image/graduation.png'
import axios from "axios";
import {useLocation} from "react-router-dom";
import {click} from "@testing-library/user-event/dist/click";

const RadioGroup = Radio.Group;

const selectedCardStyle={
    width:300,
    height:130,
    borderRadius:15,
    marginBottom:20,
    backgroundColor:'white',
    position:'relative',
    border:'1px solid rgba(60,192,201,100%)',
    color:'rgba(60,192,201,100%)'
}
const notSelectedCardStyle={
    width:300,
    height:130,
    borderRadius:15,
    marginBottom:20,
    backgroundColor:'white',
    position:'relative'
}
const ApplyForJobPage=()=>{
    const user=useLocation()
    useEffect(() => {
        axios({
            method:'get',
            url:'http://192.210.174.146:5000/jobs/recommended/'+user.user_id,
        }).then(
            res=>{
                setJob(res.response.data)
            },
            error=>{
                if(error.response){
                    Message.error('未找到推荐职位！')
                } else {
                    Message.error('Network Error!')
                }
            }
        )
    },[])

    const [job,setJob]=useState([{
        name:'前端开发工程师1',
        salary:'2-3K',
        city:'城市',
        firm:'公司名称',
        keyWord:['大专','CSS','关键词'],
        description:'description',
        education:'学历',
        lastActive:'lastActive',
        manager:'招聘经理',
        address:'工作地点',
        link:'招聘链接',
        match:92
    },{
        name:'前端开发工程师2',
        salary:'4-5K',
        city:'城市',
        firm:'公司名称',
        keyWord:['大专','CSS','关键词'],
        description:'description',
        education:'学历',
        lastActive:'lastActive',
        manager:'招聘经理',
        address:'工作地点',
        link:'招聘链接',
        match:92
    },{
        name:'前端开发工程师3',
        salary:'4-5K',
        city:'城市',
        firm:'公司名称',
        keyWord:['大专','CSS','关键词'],
        description:'description',
        education:'学历',
        lastActive:'lastActive',
        manager:'招聘经理',
        address:'工作地点',
        link:'招聘链接',
        match:92
    },{
        name:'前端开发工程师',
        salary:'4-5K',
        city:'城市',
        firm:'公司名称',
        keyWord:['大专','CSS','关键词'],
        description:'description',
        education:'学历',
        lastActive:'lastActive',
        manager:'招聘经理',
        address:'工作地点',
        link:'招聘链接',
        match:92
    },{
        name:'前端开发工程师',
        salary:'4-5K',
        city:'城市',
        firm:'公司名称',
        keyWord:['大专','CSS','关键词'],
        description:'description',
        education:'学历',
        lastActive:'lastActive',
        manager:'招聘经理',
        address:'工作地点',
        link:'招聘链接',
        match:92
    }])

     const [selectedJob,setSelectedJob]=useState(job[0])

    function KeyWordList({value}){
        return <div style={{display:'flex'}}>
            {
                value.map((value)=>{
                    return <div style={{marginRight:10,backgroundColor:"#ececec",color:'darkslategray',padding:'1px 13px 1px 13px',fontSize:12,borderRadius:5}}>{value}</div>
                })
            }
        </div>
    }

    function CardList(){
        return (<Radio.Group>
            {job.map((value)=>{
                return (
                    <Radio key={value} value={value}>
                        {({checked})=>{
                            return (
                                <Button
                                    id='cardButton'
                                    style={value===selectedJob?selectedCardStyle:notSelectedCardStyle}
                                    onClick={()=>{
                                        setSelectedJob(value)
                                    }}
                                >
                                    <div style={{fontSize:16}}>
                                        <div style={{position:'absolute',top:'7%',left:'6%',textAlign:'left'}}>
                                            <div style={{marginBottom:5}}>
                                                <span>{value.name}</span>
                                            </div>
                                            <KeyWordList value={value.keyWord} />
                                        </div>
                                        <div style={{color:"red",position:'absolute',top:'7%',right:'6%'}}>
                                            {value.salary}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{position:'absolute',bottom:'7%',left:'6%'}}>
                                            {value.city} | {value.firm}
                                        </div>
                                        <div style={{position:'absolute',bottom:'5%',right:'5%'}}>
                                            <div>
                                                <span>匹配度：</span>
                                            </div>
                                            <div style={{fontSize:21,fontWeight:'bold',color:'red'}}>
                                                {value.match}%
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            )
                        }}
                    </Radio>
                )
            })}
        </Radio.Group>)
    }

    return (<>
        <div style={{width:'100%',backgroundColor:'white',height:'65px',display:'flex',alignItems:'center'}}>
            <div style={{marginLeft:'7%',width:'20%',fontSize:30,color:'rgba(60,192,201,100%)',fontWeight:'bold'}}>
                推荐职位
            </div>
            <div style={{marginLeft:'3%',width:'30%'}}>
                <RadioGroup onChange={value => {
                    axios({
                        method:'get',
                        url:'http://192.210.174.146:5000/jobs/sort/'+value,
                    }).then(
                        res=>{
                            setJob(res.response.data)
                        },
                        error=>{
                            if (error.response){
                                Message.error('未找到推荐职位！')
                            } else {
                                Message.error('Network Error!')
                            }
                        }
                    )
                }}>
                    <Radio key={1} value='education'>学历优先</Radio>
                    <Radio key={2} value='location'>地址优先</Radio>
                    <Radio key={3} value='salary'>薪资优先</Radio>
                    <Radio key={4} value='skills'>能力优先</Radio>
                </RadioGroup>
            </div>
            <div style={{marginLeft:'20%'}}>
                <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',width:110,height:40,fontSize:18,borderRadius:5}}>修改简历</Button>
                <Button style={{marginLeft:20,color:'white',backgroundColor:'rgba(60,192,201,100%)',width:110,height:40,fontSize:18,borderRadius:5}}>重新推荐</Button>
            </div>
        </div>
        <div style={{width:'100%',display:'flex',height:'90%'}}>
            <div style={{width:'25%',overflow:'auto',height:'95%',textAlign:'center',marginTop:20}}>
                <CardList />
            </div>
            <div style={{width:'75%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'90%',height:'90%',backgroundColor:'white',borderRadius:10}}>
                    <div style={{height:'10%',margin:'15px 50px 20px 50px',display:'flex',justifyContent:'space-between'}}>
                        <div>
                            <div style={{display:'flex'}}>
                                <div style={{fontSize:23,fontWeight:'bold'}}>
                                    {selectedJob.name}
                                </div>
                                <div style={{fontSize:22,fontWeight:'bold',color:'red',marginLeft:50}}>
                                    {selectedJob.salary}
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:8}}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <img  src={pin} alt='' style={{width:14,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedJob.city}
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:50}}>
                                    <img  src={graduation} alt='' style={{width:22,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedJob.education}
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:50}}>
                                    <img  src={clock} alt='' style={{width:17,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedJob.lastActive}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{height:'80%',margin:'10px 50px 10px 50px',display:'flex',justifyContent:'space-between'}}>
                        <div style={{width:'50%',height:'100%',position:'relative'}}>
                            <div style={{width:'100%',height:'75%'}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:7}}>
                                    职位描述
                                </div>
                                <KeyWordList value={selectedJob.keyWord}/>
                                <div style={{overflow:'auto',marginTop:7,fontSize:16,width:'100%',height:'75%'}}>
                                    {selectedJob.description}
                                </div>
                            </div>
                            <div style={{width:'100%',height:'25%',position:'absolute',bottom:0,left:0}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:4}}>
                                    招聘信息
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginBottom:4,fontSize:16}}>
                                    <img  src={proFile} alt='' style={{width:15,height:17}}/>
                                    &nbsp;&nbsp;招聘经理：{selectedJob.manager}
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginBottom:4,fontSize:16}}>
                                    <img  src={pin} alt='' style={{width:14,height:17}}/>
                                    &nbsp;&nbsp;工作地点：{selectedJob.address}
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginBottom:4,fontSize:16}}>
                                    <img  src={link} alt='' style={{width:15,height:17}}/>
                                    &nbsp;&nbsp;招聘链接：{selectedJob.link}
                                </div>
                            </div>
                        </div>
                        <div style={{height:'100%',width:1.5,backgroundColor:'#ececec'}}></div>
                        <div  style={{width:'45%',height:'100%',marginLeft:'5%'}}>
                            <div style={{fontWeight:'bold',fontSize:17}}>
                                能力评价
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ApplyForJobPage