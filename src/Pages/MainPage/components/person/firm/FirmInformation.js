import {Link, Outlet} from "react-router-dom";
import {Button, Table} from "@arco-design/web-react";

const data=[
    {
        name:'公司名称',
        job:'招聘岗位',
        description:'岗位描述',
        education:'学历要求',
        manager:'招聘经理',
        salary:'月薪',
        address:'招聘地址',
        link:'招聘链接'
    },
    {
        name:'公司名称',
        job:'招聘岗位',
        description:'岗位描述',
        education:'学历要求',
        manager:'招聘经理',
        salary:'月薪',
        address:'招聘地址',
        link:'招聘链接'
    },
    {
        name:'公司名称',
        job:'招聘岗位',
        description:'岗位描述',
        education:'学历要求',
        manager:'招聘经理',
        salary:'月薪',
        address:'招聘地址',
        link:'招聘链接'
    },
    {
        name:'公司名称',
        job:'招聘岗位',
        description:'岗位描述',
        education:'学历要求',
        manager:'招聘经理',
        salary:'月薪',
        address:'招聘地址',
        link:'招聘链接'
    },
    {
        name:'公司名称',
        job:'招聘岗位',
        description:'岗位描述',
        education:'学历要求',
        manager:'招聘经理',
        salary:'月薪',
        address:'招聘地址',
        link:'招聘链接'
    },]

const columns = [
    {
        title: '公司名称',
        dataIndex: 'name'
    },
    {
        title: '招聘岗位',
        dataIndex: 'job'
    },
    {
        title: '岗位描述',
        dataIndex: 'description'
    },
    {
        title: '学历要求',
        dataIndex: 'education'
    },
    {
        title: '招聘经理',
        dataIndex: 'manager'
    },
    {
        title: '月薪',
        dataIndex: 'salary'
    },
    {
        title: '招聘地址',
        dataIndex: 'address'
    },
    {
        title: '招聘链接',
        dataIndex: 'link'
    },
    {
        title:'操作',
        render:(a,b)=>{
            console.log(a,b)
            return (<div style={{display:'flex'}}>
                <Button type={"primary"}>编辑</Button>
                <Button type={'primary'} status={'danger'} style={{marginLeft:10}}>删除</Button>
            </div>)
        }
    }
];
const FirmInformation = () => {
    return (
        <>
            <Outlet/>
            <div style={{position:'absolute',zIndex:1,top:0,bottom:0,left:'15%',right:'15%',backgroundColor:'white',padding:'30px 0px 30px 0px'}}>
                <div style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>
                    招聘信息
                </div>
                <Link to={'/main/firm_information/edit'} style={{textDecoration:'none',float:'right',marginRight:100}}>
                    <Button style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',width:125,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>新增招聘信息</Button>
                </Link>
                <Table columns={columns} data={data} border borderCell stripe={true} style={{margin:'60px 30px 20px 30px'}}/>
            </div>
        </>
    )
}

export default FirmInformation