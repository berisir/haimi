<template>
	<div class="wrap">
		<shopPage></shopPage>
		<shopList class="mt" :shopData="shopData"></shopList>
		<footerNav></footerNav>
	</div>
</template>
<script>
import shopPage from './component/shopPage'
import shopList from './component/shopList'
import footerNav from '@/components/footerNav'
export default {
	name:'shopIndex',
	data () {
		return {
			shopData: []
		}
	},
	components: {
		shopPage,
		shopList,
		footerNav
	},
	created () {
    	this.getData()
  	},
  	methods: {
    	getData () {
      		this.$http.get('/api/shopPage').then(function (opt) {
        		this.shopData = opt.data.extra.Suggest
      		})
        }
    }
  
}	
</script>
<style>
	.shop-box{
		background: 
	}
</style>	