import leftWord from '../images/firstLeftWord.png'
import leftIcon from '../images/firstLeftIcon.png'
import rightWord from '../images/firstRightWord.png'
import rightIcon from '../images/firstRightIcon.png'
import {useState} from "react";
import '../style/guide.css'
import {IconCheck, IconMinus} from "@arco-design/web-react/icon";
import {Notification, Button, Input, Radio, Steps, Select} from "@arco-design/web-react";
import {Link} from "react-router-dom";

const TextArea=Input.TextArea
const Step = Steps.Step;
const Option = Select.Option;
const options=['男','女']
const educationSelection=['大专','本科','硕士','博士']
const citySelection=['北京','上海','广州','深圳']
const selectedStyle={width:50,height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(60,192,201,100%)',color:'white'}
const notSelectedStyle={width:50,height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke',color:'#4E5969'}

const SecondStudentGuidePage=()=>{
    const [animationStyle,setAnimationStyle]=useState('fadeInAnimation')
    setTimeout(()=>{setAnimationStyle('')},1500)

    const [name,setName]=useState('diong')
    const [sex,setSex]=useState('男')
    const [lowestSalary,setLowestSalary]=useState(8)
    const [highestSalary,setHighestSalary]=useState(11)
    const [phone,setPhone]=useState('11111111111')
    const [education,setEducation]=useState('本科')
    const [year,setYear]=useState(22)
    const [intention,setIntention]=useState('后端工程师')
    const [intentionCity,setIntentionCity]=useState('上海')
    const [email,setEmail]=useState('1234567489@qq.com')
    const [profession,setProfession]=useState('计算机科学与技术')
    const [educationExperience,setEducationExperience]=useState('')
    const [internship,setInternship]=useState('')
    const [project,setProject]=useState('')
    const [advantage,setAdvantage]=useState('')
    const [tempYear,setTempYear]=useState(year.toString())

    return (
        <>
            <div style={{position:'fixed',top:'10%',bottom:0,left:0,right:'78%',textAlign:'center',paddingTop:100,paddingBottom:100}}>
                <img src={leftWord} alt={''} style={{width:'90%'}} class={animationStyle}></img>
                <img src={leftIcon} alt={''} style={{width:'90%'}} class={animationStyle}></img>
            </div>
            <div style={{position:'absolute',top:0,bottom:0,left:'22%',right:'22%',backgroundColor:'white',padding:'30px 100px 70px 100px'}}>
                <Steps current={2} style={{ width: 600, margin: '0 auto' }}>
                    <Step title='身份' description='请选择您的身份'  icon={<IconCheck style={{marginTop:4,marginLeft:1}}/>}/>
                    <Step title='信息' description='请完善您的信息'/>
                </Steps>
                <div style={{fontSize:25,fontWeight:'bold',marginTop:10}}>
                    请完善您的信息
                </div>
                <div style={{color:'orangered',marginTop:2,marginBottom:5,fontSize:13}}>
                    *简历中缺少或未能成功提取部分关键信息，信息不完整可能会影响推荐效果
                </div>
                <div style={{overflow:"auto",height:'80%',paddingLeft:5,paddingRight:5}}>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{width:'45%'}}>
                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>姓名
                                </div>
                                <Input defaultValue={name} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setName(value)}}/>
                            </div>

                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>性别
                                </div>
                                <Radio.Group defaultValue={sex} onChange={value=>{setSex(value)}} name='button-radio-group' style={{ marginBottom:15,marginTop:5,display:'flex'}}>
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
                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>期望薪资
                                </div>
                                <Input.Group style={{marginBottom:17,marginTop:3,borderRadius:5,display:'flex',alignItems:'center'}}>
                                    <Input
                                        defaultValue={lowestSalary.toString()}
                                        style={{ width: '24%', marginRight: 8 }}
                                        onChange={value => {
                                            setLowestSalary(parseInt(value))
                                        }}
                                    />
                                    <IconMinus style={{ color: 'var(--color-text-1)' }} />
                                    <Input
                                        defaultValue={highestSalary.toString()}
                                        style={{ width: '24%', marginLeft: 8 }}
                                        onChange={value => {
                                            setHighestSalary(parseInt(value))
                                        }}
                                    />
                                    &nbsp;&nbsp;<span style={{fontSize:16}}>K</span>
                                </Input.Group>
                            </div>
                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>联系电话
                                </div>
                                <Input defaultValue={phone} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setPhone(value)}}/>
                            </div>
                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>学历
                                </div>
                                <Select
                                    defaultValue={education}
                                    style={{ marginBottom:17,marginTop:3,borderRadius:5,width:200}}
                                    onChange={value =>{
                                        setEducation(value)
                                    }}
                                >
                                    {educationSelection.map((option, index) => (
                                        <Option key={option} value={option}>
                                            {option}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div style={{width:'45%'}}>
                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>年龄
                                </div>
                                <Input
                                    defaultValue={year.toString()}
                                    style={{ marginBottom:17,marginTop:3,borderRadius:5 }}
                                    onBlur={()=>{
                                        const number=/^[0-9]{1,3}$/
                                        if(number.test(tempYear)) {
                                            setYear(parseInt(tempYear))
                                        }
                                        else {
                                            Notification.error({
                                                title: 'Error',
                                                content: '请输入正确的年龄!',
                                            })
                                        }
                                    }}
                                    onChange={value=>{
                                        setTempYear(value)
                                    }}
                                />
                            </div>

                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>求职意向
                                </div>
                                <Input defaultValue={intention} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setIntention(value)}}/>
                            </div>

                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>意向城市
                                </div>
                                <Select
                                    defaultValue={intentionCity}
                                    style={{ marginBottom:17,marginTop:3,borderRadius:5,width:200}}
                                    onChange={value =>{
                                        setIntentionCity(value)
                                    }}
                                >
                                    {citySelection.map((option, index) => (
                                        <Option key={option} value={option}>
                                            {option}
                                        </Option>
                                    ))}
                                </Select>
                            </div>

                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    电子邮箱（选填）
                                </div>
                                <Input defaultValue={email} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setEmail(value)}}/>
                            </div>

                            <div>
                                <div style={{fontSize:17,color:'grey'}}>
                                    <span style={{color:'red'}}>* </span>专业
                                </div>
                                <Input defaultValue={profession} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setProfession(value)}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>教育经历
                            </div>
                            <TextArea
                                autoSize={{ minRows: 2 }}
                                defaultValue={educationExperience}
                                style={{ marginBottom:17,marginTop:3,borderRadius:5 }}
                                onChange={value=>{setEducationExperience(value)}}
                            />
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                项目经历（选填）
                            </div>
                            <TextArea
                                autoSize={{ minRows: 2 }}
                                defaultValue={project}
                                style={{ marginBottom:17,marginTop:3,borderRadius:5 }}
                                onChange={value=>{setProject(value)}}
                            />
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                实习经历（选填）
                            </div>
                            <TextArea
                                autoSize={{ minRows: 2 }}
                                defaultValue={internship}
                                style={{ marginBottom:17,marginTop:3,borderRadius:5 }}
                                onChange={value=>{setInternship(value)}}
                            />
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                个人优势（选填）
                            </div>
                            <TextArea
                                autoSize={{ minRows: 2 }}
                                defaultValue={advantage}
                                style={{marginTop:3,borderRadius:5 }}
                                onChange={value=>{setAdvantage(value)}}
                            />
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',margin:15,float:'right'}}>
                    <Link to={'/guide/student_resume'} style={{textDecoration:'none'}}>
                        <Button style={{border:'1px solid lightgrey',color:'rgba(60,192,201,100%)',backgroundColor:'white',width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>返 回</Button>
                    </Link>
                    <Link to={'/main/home'} style={{textDecoration:'none'}}>
                        <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',marginLeft:30,width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>完 成</Button>
                    </Link>
                </div>
            </div>
            <div style={{
                position:'fixed',
                top:'10%',
                bottom: 0,
                left: '78%',
                right: 0,
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

export default SecondStudentGuidePage