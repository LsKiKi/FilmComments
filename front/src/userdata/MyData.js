import React,{Component} from 'react'
import './MyData.css'
import {Tabs} from "antd";
import Comments from "../component/Comments";
import UserForm from "../component/UserForm";

const TabPane = Tabs.TabPane;

class MyData extends Component{
    constructor(props){
        super(props);
        this.state = {
            messagesNum: 0,//动态数
            collectionNum: 0,//收藏数
            focusUserNum: 0,//关注数
            fansNum: 0,//粉丝数
            focusUsers:[
                {
                    'id':1,
                    'name': 'kiki',
                    'sex': '女',
                    'isFan': false,
                    'description': '爱的发大水发富含丰富和防腐剂换个方法结合非官方看就看大水发',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':2,
                    'name': '胖七',
                    'sex': '女',
                    'isFan': false,
                    'description': '韩国海军决定更换脚后跟',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':3,
                    'name': '李桂联',
                    'sex': '男',
                    'description': '热情我热切热情而恶',
                    'isFan': true,
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':4,
                    'name': '洪文博',
                    'sex': '男',
                    'description': '圣哥哥啊手动阀打发',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':5,
                    'name': '吴倩',
                    'sex': '女',
                    'description': '升升公寓F栋305',
                    'isFan': true,
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },
                {
                    'id':6,
                    'name': '张婷婷',
                    'sex': '女',
                    'isFan': true,
                    'description': '阿道夫但是风格士大夫',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':7,
                    'name': '苗新域',
                    'sex': '女',
                    'isFan': false,
                    'description': '啊多发点',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':8,
                    'name': '五月',
                    'sex': '男',
                    'isFan': false,
                    'description': '热情我热切热情而恶',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }
            ],
            fans:[
                {
                    'id':6,
                    'name': '张婷婷',
                    'sex': '女',
                    'isFocus': true,
                    'description': '阿道夫但是风格士大夫',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':7,
                    'name': '苗新域',
                    'sex': '女',
                    'isFocus': false,
                    'description': '啊多发点',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                },{
                    'id':8,
                    'name': '五月',
                    'sex': '男',
                    'isFocus': false,
                    'description': '热情我热切热情而恶',
                    'picSrc':"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }
            ],
            userData:[12,34],
            collection:[1231]
        }
    }

    fetch(){
        this.setState((prevState) => ({
            messagesNum:prevState.userData.length,
            collectionNum: prevState.collection.length,
            userNum:prevState.focusUsers.length,
            fansNum:prevState.fans.length,

        }));
    }

    callback = (key) =>{
        console.log(key);
    };

    renderComments(isCollection){
        const res = [];
        if(isCollection){
            this.state.collection.map((item) => {
                res.push(
                    <Comments/>
                )
            });
        }else{
            this.state.userData.map((item) => {
                res.push(
                    <Comments/>
                )
            });
        }
        return res;
    }

    renderUser(isFan){
        const res = [];
        if(isFan === true){
            this.state.fans.map((item) => {
                res.push(
                    <UserForm
                        isFocus = {item.isFocus}
                        isFan = {true}
                        userName={item.name}
                        description = {item.description.length>10? item.description.substring(0,10) + '...': item.description}
                        picSrc={item.picSrc}
                    />
                )
            });
        }else{
            this.state.focusUsers.map((item) => {
                res.push(
                    <UserForm
                        isFocus = {true}
                        isFan = {item.isFan}
                        userName={item.name}
                        description = {item.description.length>10? item.description.substring(0,10) + '...': item.description}
                        picSrc={item.picSrc}
                    />
                )
            });
        }
        return res;
    }


    render(){
        const {messagesNum,collectionNum,focusUserNum,fansNum} = this.state;
        //this.fetch();
        return(
            <div className="FC_data_frame">
                <div className="FC_title">
                    <div className="FC_title_top">
                        <img
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            className="FC_title_top_headerPic"
                        />
                    </div>
                    <h2 style={{marginTop:5}}>胖七呃</h2>
                    <p>阿桑的歌的发放非官方大哥</p>
                </div>
                <div className="FC_data_content">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane className="FC_data_tab" tab="我的" key="1">
                            <p className="FC_users_text">全部动态 <span>{messagesNum}</span></p>
                            <div className="FC_user_card">
                                {this.renderComments(false)}
                            </div>
                        </TabPane>
                        <TabPane className="FC_data_tab" tab="收藏" key="2">
                            <p className="FC_users_text">全部收藏 <span>{collectionNum}</span></p>
                            <div className="FC_user_card">
                                {this.renderComments(true)}
                            </div>
                        </TabPane>
                        <TabPane className="FC_data_tab" tab="关注" key="3">
                            <p className="FC_users_text">全部关注 <span>{focusUserNum}</span></p>
                            <div className="FC_user_card">
                                {this.renderUser(false)}
                            </div>
                        </TabPane>
                        <TabPane  className="FC_data_tab" tab="粉丝" key="4">
                            <p className="FC_users_text">全部粉丝 <span>{fansNum}</span></p>
                            <div className="FC_user_card">
                                {this.renderUser(true)}
                            </div>
                        </TabPane>
                    </Tabs>
                    <div style={{height:40}}/>
                </div>
            </div>
        )
    }
}


export default MyData;