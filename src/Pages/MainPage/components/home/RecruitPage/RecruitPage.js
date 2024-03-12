import {Button, Radio} from "@arco-design/web-react";
import {useState} from "react";
import './style/RecruitPage.css'
import crosshair from './image/crosshair.png'
import email from './image/email.png'
import female from './image/female.png'
import male from './image/male.png'
import graduation from './image/graduation.png'
import phone from './image/phone.png'

const RadioGroup = Radio.Group;
const person=[{
    name:'diong',
    sex:1,
    education:'本科',
    keyWord: ['html','css','能力'],
    intention:'前端工程师',
    year:22,
    phone:18511115555,
    email:'12345678@qq.com',
    educationExperience:'description',
    projectExperience:'description',
    advantage:'description',
    internship:'description'
},{
    name:'diong',
    sex:1,
    education:'本科',
    keyWord: ['html','css','能力'],
    intention:'前端工程师',
    year:22,
    phone:18511115555,
    email:'12345678@qq.com',
    educationExperience:'description',
    projectExperience:'description',
    advantage:'description',
    internship:'description'
},{
    name:'diong',
    sex:1,
    education:'本科',
    keyWord: ['html','css','能力'],
    intention:'前端工程师',
    year:22,
    phone:18511115555,
    email:'12345678@qq.com',
    educationExperience:'description',
    projectExperience:'description',
    advantage:'description',
    internship:'description'
},{
    name:'diong',
    sex:1,
    education:'本科',
    keyWord: ['html','css','能力'],
    intention:'前端工程师',
    year:22,
    phone:18511115555,
    email:'12345678@qq.com',
    educationExperience:'description',
    projectExperience:'description',
    advantage:'description',
    internship:'description'
},{
    name:'diong',
    sex:1,
    education:'本科',
    keyWord: ['html','css','能力'],
    intention:'前端工程师',
    year:22,
    phone:18511115555,
    email:'12345678@qq.com',
    educationExperience:'description',
    projectExperience:'description',
    advantage:'description',
    internship:'description'
},]

const selectedCardStyle={width:300,height:130,borderRadius:15,marginBottom:20,backgroundColor:'white',position:'relative',border:'1px solid rgba(60,192,201,100%)'}
const notSelectedCardStyle={width:300,height:130,borderRadius:15,marginBottom:20,backgroundColor:'white',position:'relative'}
const RecruitPage=()=>{

    const [selectedPerson,setSelectedPerson]=useState(
        {
            name:'diong',
            sex:1,
            education:'本科',
            keyWord: ['html','css','能力'],
            intention:'前端工程师',
            year:22,
            phone:11122223333,
            email:'12345678@qq.com',
            educationExperience:'description',
            projectExperience:'description',
            advantage:'description2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222',
            internship:'description1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        },
    )

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
            {person.map((value)=>{
                return (
                    <Radio key={value} value={value}>
                        {({checked})=>{
                            return (
                                <Button id='cardButton' style={checked?selectedCardStyle:notSelectedCardStyle}>
                                    <div style={{fontSize:16}}>
                                        <div style={{position:'absolute',top:'7%',left:'6%',textAlign:'left'}}>
                                            <div style={{marginBottom:5}}>
                                                <span style={checked?{color:'rgba(60,192,201,100%)'}:{}}>{value.name}</span>
                                            </div>
                                            <KeyWordList value={value.keyWord} />
                                            <div style={{display:'flex',marginTop:8}}>
                                                <div style={{marginRight:10,backgroundColor:"rgb(220,248,255)",color:'rgb(0,167,176)',padding:'1px 10px 1px 10px',fontSize:12,borderRadius:3}}>有项目经历</div>
                                                <div style={{marginRight:10,backgroundColor:"rgb(220,248,255)",color:'rgb(0,167,176)',padding:'1px 10px 1px 10px',fontSize:12,borderRadius:3}}>有实习经历</div>
                                            </div>
                                        </div>
                                        <div style={{position:'absolute',top:'7%',right:'6%'}}>
                                            <span style={checked?{color:'rgba(60,192,201,100%)'}:{}}>{value.education}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{position:'absolute',bottom:'7%',left:'6%'}}>
                                            求职意向：{value.intention}
                                        </div>
                                        <div style={{position:'absolute',bottom:'5%',right:'5%'}}>
                                            <div>
                                                <span style={checked?{color:'rgba(60,192,201,100%)'}:{}}>匹配度：</span>
                                            </div>
                                            <div style={{fontSize:21,fontWeight:'bold',color:'red'}}>
                                                98%
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
        <div style={{width:'100%',backgroundColor:'white',height:'65px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'35%',fontSize:30,color:'rgba(60,192,201,100%)',fontWeight:'bold'}}>
                推荐候选人
            </div>
            <div>
                <RadioGroup>
                    <Radio key={1} value='学历优先'>学历优先</Radio>
                    <Radio key={2} value='能力优先'>能力优先</Radio>
                </RadioGroup>
            </div>
            <div style={{width:'35%'}}>
            </div>
        </div>
        <div style={{width:'100%',display:'flex',height:'90%'}}>
            <div style={{width:'25%',overflow:'auto',height:'95%',textAlign:'center',marginTop:20}}>
                <CardList />
            </div>
            <div style={{width:'75%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'90%',height:'90%',backgroundColor:'white',borderRadius:10,position:'relative'}}>
                    <div style={{height:'15%',margin:'15px 50px 20px 50px',display:'flex',justifyContent:'space-between'}}>
                        <div>
                            <div style={{fontSize:23,fontWeight:'bold'}}>
                                {selectedPerson.name}
                            </div>
                            <div style={{display:'flex',marginTop:8}}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <img  src={selectedPerson.sex?male:female} alt='' style={{width:14,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedPerson.year}岁
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:50}}>
                                    <img  src={graduation} alt='' style={{width:22,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedPerson.education}
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:50}}>
                                    <img  src={crosshair} alt='' style={{width:18,height:18}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedPerson.intention}
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:8}}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <img  src={phone} alt='' style={{width:14,height:17}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedPerson.phone.toString().slice(0,3)+'****'+selectedPerson.phone.toString().slice(7,11)}
                                    </div>
                                </div>
                                <div style={{display:'flex',alignItems:'center',marginLeft:50}}>
                                    <img  src={email} alt='' style={{width:19,height:15}}/>
                                    <div style={{marginLeft:5}}>
                                        {selectedPerson.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',width:200,height:40,fontSize:18,borderRadius:5}}>添加至候选人名单</Button>
                    </div>
                    <div style={{height:'75%',margin:'10px 50px 10px 50px',display:'flex',justifyContent:'space-between'}}>
                        <div style={{width:'50%',height:'100%',position:'relative',overflowY:'auto'}}>
                            <div style={{width:'100%'}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:7}}>
                                    专业技能
                                </div>
                                <KeyWordList value={selectedPerson.keyWord}/>
                            </div>
                            <div style={{width:'100%',marginTop:12}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:2}}>
                                    教育经历
                                </div>
                                <div style={{fontSize:17,marginBottom:7,width:'100%',wordBreak:'break-all'}}>
                                    {selectedPerson.educationExperience}
                                </div>
                            </div>
                            <div style={{width:'100%',marginTop:12}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:2}}>
                                    实习经历
                                </div>
                                <div style={{fontSize:17,marginBottom:7,width:'100%',wordBreak:'break-all'}}>
                                    {selectedPerson.internship}
                                </div>
                            </div>
                            <div style={{width:'100%',marginTop:12}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:2}}>
                                    项目经历
                                </div>
                                <div style={{fontSize:17,marginBottom:7,width:'100%',wordBreak:'break-all'}}>
                                    {selectedPerson.projectExperience}
                                </div>
                            </div>
                            <div style={{width:'100%',marginTop:12}}>
                                <div style={{fontWeight:'bold',fontSize:17,marginBottom:2}}>
                                    个人优势
                                </div>
                                <div style={{fontSize:17,marginBottom:7,width:'100%',wordBreak:'break-all'}}>
                                    {selectedPerson.advantage}
                                </div>
                            </div>
                        </div>
                        <div style={{height:'100%',width:1.5,backgroundColor:'#ececec'}}></div>
                        <div  style={{width:'45%',height:'100%',marginLeft:'5%'}}>
                            <div style={{fontWeight:'bold',fontSize:17}}>
                                匹配分析结果
                            </div>
                        </div>
                    </div>
                    <Button style={{position:'absolute',bottom:20,right:20,color:'white',backgroundColor:'rgba(60,192,201,100%)',width:110,height:40,fontSize:18,borderRadius:5}}>邀约面试</Button>
                </div>
            </div>
        </div>
    </>)
}

export default RecruitPage