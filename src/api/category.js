import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config.js';

const CancelToken = axios.CancelToken;
let cancel; // cancel会接收一个取消方法， 通过它来取消请求

// 获取内容数据 ajax
export const getCategoryContent = (id) => {
	cancel&&cancel('cancel the previous request');
	cancel = null;

	return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
		timeout: TIMEOUT,
		cancelToken: new CancelToken(function executor(c){
			cancel = c;
		})
	}).then(res => {
		console.log(res);
		if(res.data.code===SUCC_CODE) {
			return res.data.content;
		}
		throw new Error('Failed to get the data');

	}).catch(err => {
		if(axios.isCancel(err)) {
			console.log(err);
		}else{
			console.log(err);
		}
	})










// 	cancel && cancel('Previous request has been cancelled！');
// 	cancel = null;
// 	return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
// 		timeout: TIMEOUT,
// 		cancelToken: new CancelToken(function executor(c) {
// 			cancel = c;
// 		})
// 	}).then(res => {
// 		if(res.data.code === SUCC_CODE) {

// 			return res.data.content;
// 		}
// 		throw new Error('Failed to get data.')
// 	}).catch(err => {
// 		if(axios.isCancel(err)) { //Cancel the previous request！
// 			console.log(err);
// 		}else{
// 			console.log(err);
// 		}
// 	})
}