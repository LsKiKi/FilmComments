import React,{Component} from 'react'
import './UserForm.css'
import {Avatar, Button, Card, Icon, Skeleton} from "antd";
import {Link} from "react-router-dom";

const { Meta } = Card;


class UserForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
        }
    }

    onFocus = () => {

    };

    onCancelFocus = () => {

    };

    onGoTo = () => {

    };


    renderAction(){
        const {isFocus} = this.props;
        const action = [];
        action.push(isFocus === true?
            <Button type="primary" className="FC_userForm_btn" onClick={ this.onCancelFocus()}>取消关注</Button>
            :
            <Button type="primary" className="FC_userForm_btn" onClick={ this.onFocus()}>关注</Button>
        );
        action.push(
            <Button type="primary" className="FC_userForm_btn" onClick={ this.onGoTo()}>进入他的主页</Button>
        );
        return action;
    }

    renderFocusStatus() {
        const {isFan, isFocus} = this.props;
        if(isFocus === true && isFan === true){
            return (
                <span style={{fontSize:12, marginLeft:5,color: 'royalblue'}}>互相关注</span>
            );
        }
        else if(isFocus === true && isFan === false){
            return (
                <span style={{fontSize:12, marginLeft:5,color: 'royalblue'}}>已关注</span>
            );
        }
    }


    render(){
        const { loading } = this.state;
        const {userName,picSrc,description} = this.props;

        return(
            <div className="FC_user_frame">
                <Card
                    style={{ width: 300,}}
                    actions={this.renderAction()}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={<Avatar src={picSrc}/>}
                            title={<span>{userName}{this.renderFocusStatus()}</span>}
                            description={description}
                        />
                    </Skeleton>
                </Card>
            </div>
        )
    }
}

export default UserForm;