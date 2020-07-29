import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCC_CODE, TIMEOUT, HOME_RECOMMENT_PAGE_SIZE, jsonpOptions} from './config';

const shuffle = (arr) => {
  const arrLen = arr.length;
  let i = arrLen;
  let rndNum;
  while(i--){
    
    if(i !== (rndNum = Math.floor(arr.length *Math.random()))){
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }
  return arr;
};
// 获取幻灯片数据 -- ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider',{
  	timeout:TIMEOUT
  }).then(res => {
    if (res.data.code === SUCC_CODE) {

      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(sliders.length *Math.random())]];
     
      sliders = shuffle(sliders.filter(()=> Math.random()>=0.5));
      if(sliders.length===0){
        sliders = slider;
      }      
      return sliders;

    }

    throw new Error('fail to get data');
  }).catch(err =>{
  	if(err){
  		console.log(err);
  	}
  	return[
	  	{
	  		linkUrl:'https://www.imooc.com',
	  		picUrl: require('assets/img/404.png')
	  	}
  	]
  });
};

// 获得热门推荐数据 --jsonp
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMENT_PAGE_SIZE) => {
	const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
	const params = {
		page,
		psize,
		type: 0,
		frontCatId: ''
	};
	return jsonp(url, params, jsonpOptions)
  .then( res => {
		if(res.code === '200'){

      return res;
    }
    throw new Error('fail to get data');
	}).catch(err =>{
    if(err){
      console.log(err);
      return undefined;
    }   
  });
};
