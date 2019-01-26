import history from '../route/history'
//util
import WtLogger from './FcLogger'
import {store} from '../store'
import {ACTION_AUTH} from '../store/action'
import TokenManager from "./FcTokenManager";

export default function (error) {
	if(typeof error == 'object' && typeof error.code == 'number'){
		if(error.code > 1400 && error.code < 1500){
			//jump to login page
			//history.push('/login');
            TokenManager.removeToken();
            store.dispatch({
                type:ACTION_AUTH.LOGOUT
            });
		}
	}

    WtLogger.log(error);
}