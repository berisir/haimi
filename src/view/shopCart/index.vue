<template>
	<div>
		<Swiper :swiperData="list"></Swiper>
		<shopInfo :datas="datas"></shopInfo>
		<shopOther :datas="datas"></shopOther>
		<shopGrade :datas="datas"></shopGrade>
		<shopSelect :datas="datas"></shopSelect>
		<shopDetails :Promises="datas.Promises">
			<div v-html="datas.Descriptioin"></div>
		</shopDetails>
		<shopDtail :datas="datas"></shopDtail>
		<shopFooter></shopFooter>	
	</div>
</template>

<script>
import Swiper from '@/components/shopSwiper'	
import shopInfo from './component/shopInfo'	
import shopOther from './component/shopOther'
import shopGrade from './component/shopGrade'	
import shopSelect from './component/shopSelect'	
import shopDetails from './component/shopDetails'	
import shopDtail from '@/components/shopDtail'	
import shopFooter from '@/components/shopFooter'	

export default {
	data () {
		return {
			list: [],
			datas: ''
		}	
	},
	components: {
		Swiper,
		shopInfo,
		shopOther,
		shopGrade,
		shopSelect,
		shopDetails,
		shopDtail,
		shopFooter	
	},
	created () {
		this.getData()
	},
	methods: {
		getData () {
			this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+this.$route.query.id,{
				Params:{
					platform:'WAP'
				},
				jsonp:'_callback'
			}).then(function(opt){
				this.list = JSON.parse(opt.data.data.ProductPictures)
				this.datas = opt.body.data
				document.body.offsetTop = 0;
			})
		}
	},
	watch:{
		'$route':'getData'
	}
}
</script>
<style>
	
</style>	