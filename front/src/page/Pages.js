import React,{Component} from 'react'
import {Button, Input} from "antd";
import './Pages.css'
import StarMarking from "../component/StarMarking";

const { TextArea } = Input;

class Pages extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: "",
        }
    }

    render(){
        return(
            <div>
                <div className="FC_comment_add_frame">
                    <div className="FC_comment_add_title_frame">
                        <p className="FC_comment_add_title_text">看完电影你有什么想说的？</p>
                    </div>
                    <div className="input_frame">

                        <div className="film_name">
                            <span style={{color: '#2e2e2e',marginRight: '8px'}}>电影名称 </span>
                            <div className="textArea" contentEditable="true"></div>
                        </div>
                        <div className="film_content">
                            <span style={{color: '#2e2e2e',marginRight: '8px'}}>剧情介绍 </span>
                            <div className="textArea" contentEditable="true"></div>
                        </div>
                        <div className="film_feel">
                            <span style={{color: '#2e2e2e',marginRight: '8px'}}>个人感悟 </span>
                            <div className="textArea" contentEditable="true"></div>
                        </div>
                        <div className="film_start">
                            <span style={{color: '#2e2e2e',marginRight: '8px'}}>电影评分 </span>
                            <StarMarking/>
                        </div>
                    </div>
                    <Button type="primary" className="FC_comment_add_btn">发布</Button>
                </div>
                <div className="FC_comments">
                    ...
                    <br />
                    Really
                    <br />...<br />...<br />...<br />
                    long
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />
                    content
                </div>
            </div>
        )
    }
}

export default Pages;