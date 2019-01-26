export const hostUrl = '/api/v1';
export const tokenKey = 'userToken';
export const fsHost = process.env.NODE_ENV === 'production' ? '' : '//localhost:8000';
export const wsHost = process.env.NODE_ENV === 'production' ? '//www.mpp10.top:3003' : '//localhost:3003';

export default {
	version:'2.0.1',
}