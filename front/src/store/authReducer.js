/**
 * Created by coder on 2018/3/28.
 */
import {ACTION_AUTH} from './action'
import initState from './state'


export default (state = initState.auth,action) => {
	switch(action.type){
		case ACTION_AUTH.LOGIN:
			const {userInfo} = action.payload;
			return {
				login:true,
				userInfo,
				try:true,
			};
		case ACTION_AUTH.LOGOUT:
			return {
				login:false,
				userInfo:null,
				try:true,
			};
		case ACTION_AUTH.LOGIN_FAIL:
			return {
				login:false,
				userInfo:null,
				try:true,
			};
		default:
			return state;
	}
}