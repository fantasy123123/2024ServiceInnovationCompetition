import {Link} from "react-router-dom";
import {Input, Button,  Steps, Select} from "@arco-design/web-react";
import {useState} from "react";
const TextArea = Input.TextArea;
const options = ['大专','本科','硕士','博士'];
const Option=Select.Option

const EditFirmInformation=()=>{
    const [name,setName]=useState('')
    const [job,setJob]=useState('')
    const [description,setDescription]=useState('')
    const [education,setEducation]=useState('')
    const [manager,setManager]=useState('')
    const [salary,setSalary]=useState('')
    const [address,setAddress]=useState('')
    const [link,setLink]=useState('')

    return (
        <>
            <div style={{position:'absolute',zIndex:10,top:0,bottom:0,left:'22%',right:'22%',backgroundColor:'white',padding:'60px 50px 70px 100px'}}>
                <div style={{fontSize:25,fontWeight:'bold'}}>
                    请填写公司信息和招聘要求
                </div>
                <div style={{marginTop:20,display:'flex',justifyContent:'space-between'}}>
                    <div style={{width:'45%'}}>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>公司名称
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setName(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>招聘职位
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setJob(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>职位描述
                            </div>
                            <TextArea autoSize={{ minRows: 1, maxRows: 6 }} style={{ marginBottom:15,marginTop:5,borderRadius:5 }} onChange={value=>{setDescription(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>最低学历要求
                            </div>
                            <Select
                                style={{ marginBottom:17,marginTop:3,borderRadius:5,width:200}}
                                onChange={value=>{setEducation(value)}}
                            >
                                {options.map((option, index) => (
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
                                <span style={{color:'red'}}>* </span>招聘经理
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setManager(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>月薪
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setSalary(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>面试地址
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>招聘链接
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setLink(value)}}/>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:30,float:'right'}}>
                    <Link to={'/main/firm_information'} style={{textDecoration:'none'}}>
                        <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',marginLeft:30,width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>完 成</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default EditFirmInformation