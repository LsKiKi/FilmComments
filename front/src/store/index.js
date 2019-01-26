/**
 * Created by coder on 2018/3/28.
 */
import {applyMiddleware,createStore,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore,persistCombineReducers } from 'redux-persist'
import authReducer from './authReducer'
import notifyReducer from './notifyReducer'

const config = {
	key:'userPrimary',
	storage
};

const middlewares = [thunk];

const rootReducer = persistCombineReducers(config,{
	auth:authReducer,
	notify:notifyReducer,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	compose(
		applyMiddleware(...middlewares),
	)
);

export const persistor = persistStore(store,null,()=>{
	store.getState()
});

persistor.purge();