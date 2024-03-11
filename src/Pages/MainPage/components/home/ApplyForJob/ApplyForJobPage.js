import {Button, Divider, Radio} from "@arco-design/web-react";
import {useState} from "react";
import pin from './image/pin.png'
import clock from './image/clock.png'
import link from './image/link.png'
import proFile from './image/profile.png'
import graduation from './image/graduation.png'

const RadioGroup = Radio.Group;
const job=[{
    name:'前端开发工程师',
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
}]
const ApplyForJobPage=()=>{
    const [selectedJob,setSelectedJob]=useState({
        name:'前端开发工程师',
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
    })

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
        return job.map(value => {
            return (
                <Button style={{width:300,height:130,borderRadius:15,marginBottom:20,backgroundColor:'white',position:'relative'}}>
                    <div style={{fontSize:16}}>
                        <div style={{position:'absolute',top:'7%',left:'6%',textAlign:'left'}}>
                            <div style={{marginBottom:5}}>
                                {value.name}
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
                                匹配度：
                            </div>
                            <div style={{fontSize:21,fontWeight:'bold',color:'red'}}>
                                98%
                            </div>
                        </div>
                    </div>
                </Button>
            )
        })
    }

    return (<>
        <div style={{width:'100%',backgroundColor:'white',height:'65px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
            <div style={{width:240,fontSize:30,color:'rgba(60,192,201,100%)',fontWeight:'bold'}}>
                推荐职位
            </div>
            <div>
                <RadioGroup>
                    <Radio key={1} value='学历优先'>学历优先</Radio>
                    <Radio key={2} value='地址优先'>地址优先</Radio>
                    <Radio key={3} value='薪资优先'>薪资优先</Radio>
                    <Radio key={4} value='能力优先'>能力优先</Radio>
                </RadioGroup>
            </div>
            <div style={{width:240}}>
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
                                    <img  src={pin} alt='' style={{width:15,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedJob.city}
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:30}}>
                                    <img  src={graduation} alt='' style={{width:22,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedJob.education}
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:30}}>
                                    <img  src={clock} alt='' style={{width:17,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedJob.lastActive}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',width:110,height:40,fontSize:18,borderRadius:5}}>投递简历</Button>
                    </div>
                    <div style={{height:'80%',margin:'0px 50px 0px 50px',display:'flex',justifyContent:'space-between'}}>
                        <div>

                        </div>
                        <div style={{height:'100%',width:1.5,backgroundColor:'#ececec'}}></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ApplyForJobPage