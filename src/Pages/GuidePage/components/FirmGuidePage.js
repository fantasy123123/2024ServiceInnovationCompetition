import {Link, useNavigate} from "react-router-dom";
import {Input, Button, Radio, Steps} from "@arco-design/web-react";
import {useState} from "react";
import {IconCheck} from "@arco-design/web-react/icon";
import leftWord from '../images/firstLeftWord.png'
import leftIcon from '../images/firstLeftIcon.png'
import rightWord from '../images/firstRightWord.png'
import rightIcon from '../images/firstRightIcon.png'

const TextArea = Input.TextArea;
const options = ['大专','本科','硕士','博士'];
const Step = Steps.Step;
const selectedStyle={height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(60,192,201,100%)',color:'white'}
const notSelectedStyle={height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke',color:'#4E5969'}

const FirmGuidePage=()=>{
    const navigate=useNavigate()

    const [name,setName]=useState('')
    const [job,setJob]=useState('')
    const [description,setDescription]=useState('')
    const [education,setEducation]=useState('')
    const [manager,setManager]=useState('')
    const [salary,setSalary]=useState('')
    const [address,setAddress]=useState('')
    const [link,setLink]=useState('')

    const [animationStyle,setAnimationStyle]=useState('fadeInAnimation')
    setTimeout(()=>{setAnimationStyle('')},1500)

    return (
        <>
            <div style={{position:'absolute',top:0,bottom:0,left:0,right:'78%',backgroundColor:'#F0F4FF',textAlign:'center',paddingTop:100,paddingBottom:100}}>
                <img src={leftWord} alt={''} style={{width:'90%'}} class={animationStyle}></img>
                <img src={leftIcon} alt={''} style={{width:'90%'}} class={animationStyle}></img>
            </div>
            <div style={{position:'absolute',top:0,bottom:0,left:'22%',right:'22%',backgroundColor:'white',padding:'60px 100px 70px 100px'}}>
                <div>
                    <Steps current={2} style={{ width: 600, margin: '0 auto' }}>
                        <Step title='身份' description='请选择您的身份' icon={<IconCheck style={{marginTop:4,marginLeft:1}}/>}/>
                        <Step title='信息' description='请完善您的信息'/>
                    </Steps>
                </div>
                <div style={{fontSize:25,fontWeight:'bold',marginTop:30}}>
                    请填写公司信息和招聘要求
                </div>
                <div style={{marginTop:20,display:'flex',justifyContent:'space-between'}}>
                    <div style={{width:'45%'}}>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                公司名称
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setName(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                招聘职位
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setJob(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                职位描述
                            </div>
                            <TextArea autoSize={{ minRows: 1, maxRows: 6 }} style={{ marginBottom:15,marginTop:5,borderRadius:5 }} onChange={value=>{setDescription(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                最低学历要求
                            </div>
                            <Radio.Group onChange={value=>{setEducation(value)}} name='button-radio-group' style={{ marginBottom:15,marginTop:5,display:'flex',justifyContent:'space-between'}}>
                                {options.map((item) => {
                                    return (
                                        <Radio key={item} value={item}>
                                            {({ checked }) => {
                                                return (
                                                    <Button tabIndex={-1} key={item} style={checked ? selectedStyle : notSelectedStyle}>
                                                        {item}
                                                    </Button>
                                                );
                                            }}
                                        </Radio>
                                    );
                                })}
                            </Radio.Group>
                        </div>
                    </div>
                    <div style={{width:'45%'}}>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                招聘经理
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setManager(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                月薪
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setSalary(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                面试地址
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                招聘链接
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setLink(value)}}/>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:30,float:'right'}}>
                    <Link to={'/guide/identity'} style={{textDecoration:'none'}}>
                        <Button style={{border:'1px solid lightgrey',color:'rgba(60,192,201,100%)',backgroundColor:'white',width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>返 回</Button>
                    </Link>
                    <Link to={'/main/home'} style={{textDecoration:'none'}}>
                        <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',marginLeft:30,width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>完 成</Button>
                    </Link>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '78%',
                right: 0,
                backgroundColor: '#F0F4FF',
                textAlign: 'center',
                paddingTop: 100,
                paddingBottom: 100
            }}>
                <img src={rightIcon} alt={''} style={{width: '90%'}} className={animationStyle}></img>
                <img src={rightWord} alt={''} style={{width: '90%'}} className={animationStyle}></img>
            </div>
        </>
    )
}

export default FirmGuidePage