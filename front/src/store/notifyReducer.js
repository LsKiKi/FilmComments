/**
 * Created by coder on 2018/5/10.
 */
import {ACTION_NOTIFY} from './action'
import initState from './state'


export default (state = initState.notify,action) => {
	switch(action.type){
		case ACTION_NOTIFY.CHANGE:
			const {count} = action.payload;
			return {
				count,
				newest:null,
			};
		case ACTION_NOTIFY.SET_NEWEST:
			const {newest} = action.payload;
			return Object.assign({},state,{newest});
		default:
			return state;
	}
}