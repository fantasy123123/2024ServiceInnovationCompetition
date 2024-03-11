import { Outlet} from "react-router-dom";
import {Layout} from "@arco-design/web-react";
const Header = Layout.Header;
const Content = Layout.Content;

const GuidePage=()=>{

    return (<>
        <Layout style={{ position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'whitesmoke' }}>
            <Header style={{width:'100%',height:'70px',backgroundColor:'rgba(56,56,56,100%)',display:'flex',alignItems:'center'}}>
                <div style={{width:'15%',textAlign:"center",fontSize:30,color:'rgba(60,192,201,100%)'}}>
                    LOGO
                </div>
            </Header>
            <Content style={{width:'100%',position:'relative'}}>
                <Outlet />
            </Content>
        </Layout>
    </>)
}

export default GuidePage