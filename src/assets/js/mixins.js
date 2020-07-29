import {SEARCH_HISTORY_KEYWORD_KEY} from 'pages/search/config';
import storage from 'assets/js/storage';

export const searchMixin = {
	methods: {
		 $_selectItem(keyword) {
			let keywords = storage.get(SEARCH_HISTORY_KEYWORD_KEY,[]);
			if(keywords.length !==0 ){
				keywords = keywords.filter(val => val !== keyword)
			}
			keywords.unshift(keyword);    		
			storage.set(SEARCH_HISTORY_KEYWORD_KEY, keywords);
			// location.href = `http://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&sst=1&n=20&buying=buyitnow&q=${keyword}`;
		}

	}
};
