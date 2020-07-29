import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import { jsonpOptions, TIMEOUT } from './config';
import {storage} from 'assets/js/storage';

// 获取热门搜索数据 --ajax
export const getSearchHotKeyword = () => {
	return axios.get('http://www.imooc.com/api/search/hot', {
		timeout: TIMEOUT
	}).then(res => {
		res = res.data.hotKeyWord;
		if(res && res.owner) {
			return res.owner;
		}
		throw new Error('Failed to get the data!')
	}).catch(err => {
		if (err) {
			console.log(err);
		}
	}).then(res => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(res);
			}, 1000);
		})
	})
}

export const getSearchResult = keyword => {
	const url = 'https://suggest.taobao.com/sug';
	const params = {
		q: keyword,
		code: 'utf-8',
		area: 'c2c',
		nick: '',
		sid: null
	};
	return jsonp(url, params, jsonpOptions).then(res => {
		// console.log(res);
		if(res.result) {
			return res.result;
		}
		throw new Error('Failed to get the data!')
	}).catch(err => {
		if(err) {
			console.log(err);
		}
	}).then(res => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(res)
			}, 1000);
		})
	})
}
