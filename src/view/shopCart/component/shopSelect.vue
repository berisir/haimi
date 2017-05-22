<template>
	<div>
		<dl class="select-box m-box">
			<dt><img :src="datas.Mall.LogoSrc" alt=""></dt>
			<dd>
				<h3>{{datas.Mall.MallName}}</h3>
				<p>{{datas.Mall.Introduction}}</p>
			</dd>
		</dl>
		<div class="shop-lis m-box">
			<a href="#">发现更多<span>{{datas.BrandName}}</span>良品</a>
		</div>
	</div>
</template>
<script>
export default {
	props: ['datas']
}
</script>
<style lang="less">
.select-box{
	padding:.1rem;
	overflow:hidden;
	dt,dd{
		float: left;
	}
	dt{
		width:.42rem;
		img{
			display: block;
			width:100%;
		}
		display:inline-block;
	}
	dd{
		padding-left: .1rem;
		h3{
			font-weight: normal;
		}
		p{
			white-space: nowrap;
    		overflow: hidden;
    		text-overflow: ellipsis;
		}
	}

}
.shop-lis{
	span{
		color:#991f33;
	}
}
</style>