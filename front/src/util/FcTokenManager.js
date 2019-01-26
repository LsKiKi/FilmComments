import {tokenKey} from '../config'
import {store} from '../store'
import {ACTION_AUTH} from '../store/action'

export default {
	getToken(){
		const token = localStorage.getItem(tokenKey);
		const tokenEx = JSON.parse(localStorage.getItem(tokenKey + 'Ex'));
		if(!token || !tokenEx){
			return null;
		}

		if(tokenEx.remember){
			return token;
		} else {
			if(tokenEx.timestamp - new Date().getTime() > 3600*2*1000){
			//if(new Date().getTime() - tokenEx.timestamp > 30*1000){
				localStorage.removeItem(tokenKey);
				localStorage.removeItem(tokenKey + 'Ex');
				store.dispatch({
					type:ACTION_AUTH.LOGOUT
				});
				return null;
			} else {
				return token;
			}
		}
	},

	setToken(token,remember){
		localStorage.setItem(tokenKey,token);


		if(remember === undefined){
			const tokenEx = JSON.parse(localStorage.getItem(tokenKey + 'Ex'));
			remember = tokenEx ? tokenEx.remember : true;
		}

		localStorage.setItem(tokenKey + 'Ex',JSON.stringify({
			remember:remember,
			timestamp:new Date().getTime(),
		}));
	},

	removeToken(){
		localStorage.removeItem(tokenKey);
		localStorage.removeItem(tokenKey + 'Ex');
	},

	isRefreshing(){
		return !!localStorage.getItem(tokenKey+'Fresh');
	},


	setRefreshing(v){
		if(v){
			localStorage.setItem(tokenKey+'Fresh',1);
		} else {
			localStorage.removeItem(tokenKey+'Fresh');
		}
	}
};