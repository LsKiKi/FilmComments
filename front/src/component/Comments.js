import React,{Component} from 'react';
import {Comment, Icon, Tooltip, Avatar, Input, Button,} from 'antd';
import moment from 'moment';
import update from 'react-addons-update';
import './Comments.css'
import SunComments from "./SunComments";

const { TextArea } = Input;
const { ButtonGroup } = Button.Group;

class NewComments extends Component{
    render(){
        return(
            <div className="FC_new_Comment_frame">
                <Avatar
                    size={34}
                    style={{ position: 'relative', left: 2, right: 3, top: 5}}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                <div style={{width: '90%',textAlign:'left',marginLeft: 8}}>
                    <p style={{ marginTop: 8, marginBottom: 0, fontSize: 12, color:'#FFFFFF'}}>用户名称
                        <span style={{color:'#2e2e2e', fontSize: 14}}>
                            : 士大夫的反对萨德事件感到口干独立的司法给
                        </span>
                    </p>
                    <div style={{width:'100%'}}>
                        <span style={{float:'left', padding:0, margin: 0}}> 时间 </span>
                        <div style={{float:'right'}}>
                            <Button
                                type="primary"
                                style={{
                                    backgroundColor:'transparent',
                                    border: '1px solid transparent',
                                    padding: 0,
                                    marginRight: 3}}
                            >回复</Button>
                            <Button
                                type="primary"
                                icon="like"
                                style={{
                                    backgroundColor:'transparent',
                                    border: '1px solid transparent',
                                    padding: 0,
                                    marginLeft: 3}}
                            >
                                <span>{12}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Comments extends Component {
    state = {
        author:'kiki',
        collections: 0,
        likes: 0,
        comments: 0,
        action: [],
        addComment:false
    };

    collected = () => {
        const {action} = this.state;
        const index = action.indexOf('收藏');

        //点击收藏
        if(action.length === 0){
            this.setState((prevState) => ({
                collections: prevState.collections + 1,
                action: update(prevState.action,{$splice:[[prevState.action.length,0,"收藏"]]})
            }));
        }else if(action.length>0 && index === -1){
            this.setState((prevState) => ({
                collections: prevState.collections + 1,
                action: update(prevState.action,{$splice:[[prevState.action.length,0,"收藏"]]})
            }));
        }else{  //取消收藏
            this.setState((prevState) => ({
                collections: prevState.collections - 1,
                action: update(prevState.action,{$splice:[[index,1]]})
            }));
        }
    };

    like = () => {
        const {action} = this.state;
        const index = action.indexOf('喜欢');

        //点赞
        if(action.length === 0){
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                action: update(prevState.action,{$splice:[[prevState.action.length,0,"喜欢"]]})
            }));
        }else if(action.length>0 && index === -1){
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                action: update(prevState.action,{$splice:[[prevState.action.length,0,"喜欢"]]})
            }));
        }else{  //取消点赞
            this.setState((prevState) => ({
                likes: prevState.likes - 1,
                action: update(prevState.action,{$splice:[[index,1]]})
            }));
        }
    };

    comment = () => {
        this.setState((prevState) => ({
            addComment:!prevState.addComment
        }));
    };

    render() {
        const { author, collections, likes, comments, action, addComment} = this.state;
        const collectIndex = action.indexOf("收藏");
        const likeIndex = action.indexOf("喜欢");

        const actions = [
            <span>
                <Tooltip title="收藏">
                  <Icon
                      type="heart"
                      style={{fontSize:20}}
                      theme={collectIndex === -1 ?  'outlined' : 'filled'}
                      onClick={this.collected}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto', fontSize:14}}>
                  {collections}
                </span>
            </span>,
            <span>
                <Tooltip title="喜欢">
                  <Icon
                      type="like"
                      style={{fontSize:20}}
                      theme={likeIndex === -1 ? 'outlined' : 'filled'}
                      onClick={this.like}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto', fontSize:14}}>
                  {likes}
                </span>
            </span>,
            <span>
                <Tooltip title="评论">
                  <Icon
                      type="message"
                      style={{fontSize:20}}
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.comment}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto', fontSize:14}}>
                  {comments}
                </span>
            </span>,
        ];

        return (
            <div className="FC_comment">
                <Comment
                    className="FC_comment_frame"
                    actions={actions}
                    author={<a>{author}</a>}
                    avatar={(
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    )}
                    content={(
                        <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                    )}
                    datetime={(
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    )}
                />
                {
                    addComment?
                        /*<div className="FC_comment_add_box">
                            <div className="FC_comment_add_box_top">
                                <div className="FC_comment_add_box_headPic">
                                    <Avatar
                                        size={34}
                                        style={{ position: 'relative', left: 2, right: 3, top: -4}}
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                </div>
                                <TextArea
                                    id="FC_comment_textArea"
                                    autosize={true}
                                />
                            </div>
                            <Button type="primary" className="FC_newComment_add_btn">评论</Button>
                            <div className="FC_new_Comments">
                                <NewComments />
                                <NewComments />
                                <NewComments />
                            </div>
                        </div>*/
                        <SunComments/>
                        :
                        null
                }
            </div>
        );
    }
}

export default Comments;
