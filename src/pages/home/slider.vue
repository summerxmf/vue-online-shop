<template>
	<div class="slider-wrapper">
		<me-loading v-if="!sliders.length"></me-loading>

		<me-slider
			:direction ="direction"
			:interval="interval"
			:loop="loop"
			:pagination="pagination"
      :data="sliders"
			v-else
		>
			<swiper-slide v-for="(item, index) in sliders"
			:key="index"
			>
				<a :href="item.linkUrl" class="slider-link">
					<img :src="item.picUrl" alt="" class="slider-img">
				</a>
			</swiper-slide>
		</me-slider>
	</div>

</template>
<script>
  import MeSlider from 'base/slider';
  import {SwiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from 'api/home';
  import MeLoading from 'base/loading';

  export default{
    name: 'HomeSlider',
    components: {
      MeSlider,
      SwiperSlide,
      MeLoading
    },

    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
        // sliders: [
        // 	{
        // 		'linkUrl': 'http://www.google.com',
        // 		'picUrl': require('./1.jpg')
        // 	},
        // 	{
        // 		'linkUrl': 'http://www.google.com',
        // 		'picUrl': require('./2.jpg')
        // 	},
        // 	{
        // 		'linkUrl': 'http://www.google.com',
        // 		'picUrl': require('./3.jpg')
        // 	},
        // 	{
        // 		'linkUrl': 'http://www.google.com',
        // 		'picUrl': require('./4.jpg')
        // 	}
        // ]
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      // API
      updata(){
        return this.getSliders();
      },

      getSliders() {
        return getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
	.slider-wrapper{
		height: 183px;
	}
	.slider-link{
		display: block;
	}
	.slider-link,
	.slider-img{
		width: 100%;
		height: 100%;
	}
</style>
