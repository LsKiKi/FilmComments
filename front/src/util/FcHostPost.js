import {hostUrl} from '../config'
import TokenManager from './FcTokenManager'
import WtLogger from './FcLogger'


export default function FcHostPost(url,data,needToken = false){
	const token = needToken ? TokenManager.getToken() : null;
	if(needToken && !token){
		//没有找到token
		return new Promise((resolve,reject) => {reject({code:1401,msg:'not found token'})});
	}

	if(needToken && token == 'waiting'){
		//如果发现token正在刷新，则等待4s,否则清空token
		return RefreshToken().then((json) => {
			return FcHostPost(url,data,needToken);
		}).catch((error) => {
			WtLogger.log(error);
		});
	}

	WtLogger.log('send',data);
	return fetch(hostUrl + url,{
		//credentials: 'include',
		method:'POST',
		headers:{
			'Content-Type':'application/json',
			'authorization':'bearer ' + token
		},
		body:JSON.stringify(data)
	}).then((response) => {
		return response.json().then((json) => {
			return {json,header:response.headers};
		})
	}).then(({json,header}) => {
		return DefaultCheckPost(json,header,url,data,needToken);
	});
}

function setRefreshTokenTimeout() {
	return new Promise((resolve,reject) => {
		//设置token更新超时
		let count = 0;
		let waitTime = setInterval(() => {
			count++;
			if(!TokenManager.isRefreshing()){
				clearInterval(waitTime);
				return resolve({token:TokenManager.getToken()});
			}
			if(count > 20){
				clearInterval(waitTime);
				TokenManager.removeToken();
				return reject({code:1402,msg:'wait refresh token timeout'});
			}
		},200);
	});
}


function RefreshToken(){
	if(TokenManager.isRefreshing()){
		return setRefreshTokenTimeout();
	} else {
		//开始刷新token，设置为waiting，防止重复刷新
		TokenManager.setRefreshing(true);
		return fetch(hostUrl + '/auth/refresh',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({token:TokenManager.getToken()})
		}).then((response) => response.json())
			.then((json) => {
				if(json.code === 0){
					TokenManager.setToken(json.token);
					TokenManager.setRefreshing(false);
					return json;
				} else {
					TokenManager.removeToken();
					return Promise((resolve,reject) => reject({code:1403,msg:'refresh token fail',json:json}));
				}
			});
	}

}

function DefaultCheckPost(json,header,url,data,needToken){
	WtLogger.log('fetch',json);
	if(needToken){
		if(json.code === 401 && json.msg === 'token_expired'){
			return RefreshToken().then((json) => {
				return FcHostPost(url,data,needToken);
			}).catch((error) => {
				WtLogger.log(error);
			});
		}
	}

	return {json,header};
}
