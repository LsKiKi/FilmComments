import React,{Component} from 'react';
import './Home.css'
import {Layout, Menu} from "antd";
import {Router, Route, Link, Switch} from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";
import Focuses from "./focuses/Focuses";
import MyData from "./userdata/MyData";
import Pages from "./page/Pages";


const { Content, Sider} = Layout;


class Home extends Component{
    constructor(props){
        super(props);
    }

    renderSubMenu(){
        return(
            <Menu
                mode="vertical"
                className="FC_sider_menu"
            >
                <Menu.Item key="pages">
                    <Link to="/home/pages"> 首页</Link>
                </Menu.Item>
                <Menu.Item key="focuses">
                    <Link to="/home/focuses"> 关注</Link>
                </Menu.Item>
                <Menu.Item key="my-comments">
                    <Link to="/home/my-comments"> 我的</Link>
                </Menu.Item>
                <Menu.Item key="change-password">
                    <Link to="/home/change-password"> 修改密码</Link>
                </Menu.Item>
                <Menu.Item key="change-headPic">
                    <Link to="/home"> 修改头像</Link>
                </Menu.Item>
                <Menu.Item key="exit">
                    <Link to="/home"> 退出</Link>
                </Menu.Item>
            </Menu>
        )
    }


    render(){
        return(
            <div className="FC_home_page">
                <Layout className="FC_layout">
                    <Sider className="FC_layout_sider">
                        {this.renderSubMenu()}
                    </Sider>

                    <Layout className="FC_layout_contain" >
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <Switch>
                                <Route path="/home/pages" component={Pages}/>
                                <Route path="/home/focuses" component={Focuses}/>
                                <Route path="/home/my-comments" component={MyData}/>
                                <Route path="/home/change-password" component={ChangePassword}/>
                            </Switch>

                            <div style={{height:30}}/>
                        </Content>
                    </Layout>

                    <div className="FC_layout_unused" />
                </Layout>
            </div>
        )
    }
}

export default Home;
