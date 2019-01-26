import React, {Component} from 'react'
import {Route,Redirect} from 'react-router'
import {Router} from 'react-router-dom'
import {connect} from 'react-redux'

import history from './history'
import {ACTION_AUTH, ACTION_NOTIFY} from '../store/action'

import Login from "../auth/Login";
import ForgotPassword from "../auth/ForgotPassword";
import ForgotPasswordActive from "../auth/ForgotPasswordActive";
import Home from "../Home";

//util
import HostPost from "../util/FcHostPost";
import FcDefaultHandlePostError from '../util/FcDefaultHandlePostError'


class Loading extends Component {
    render() {
        return 'loading';
    }
}

class FCRoute extends Component {
    loadUserInfo = () => {
        HostPost('/auth/user/info', {stage:'front'}, true).then(({json, header}) => {
            if (json.code === 0) {
                this.props.login(json.info);
            } else {
                throw json;
            }
        }).catch(e => {
            this.props.loginFail();
            FcDefaultHandlePostError(e);
        });
    };

    authCheck = (props) => {

        return <Home {...props}/>;
        /*const {auth} = this.props;
        if (auth.login) {
            return <Home {...props} />;
        } else if (auth.try === false) {
            this.loadUserInfo();
            return <Loading/>
        } else {
            return <Redirect to="/login"/>;
        }*/
    };

    loginCheck = (props) => {
        const {auth} = this.props;
        if (auth.login) {
            return <Redirect to="/home/pages"/>;
        } else if (auth.try === false) {
            this.loadUserInfo();
            return <Loading/>
        } else {
            return <Login {...props}/>;
        }
    };


    render() {
        return (
            <Router history={history}>
                <div style={{height: '100%'}}>
                    {/*<Route path="/" render={this.loginCheck} exact/>
                    <Route path="/login" render={this.loginCheck}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route path="/forgot-password-active" component={ForgotPasswordActive}/>*/}
                    <Route path="/" render={this.authCheck}/>
                </div>
            </Router>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = {
    login: (userInfo) => {
        return {
            type: ACTION_AUTH.LOGIN,
            payload: {userInfo},
        }
    },
    loginFail: () => {
        return {
            type: ACTION_AUTH.LOGIN_FAIL,
        }
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(FCRoute);