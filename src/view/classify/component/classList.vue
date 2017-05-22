<template>
	<div class="class-list">
		<div class="class-imgs">
			<a href="javascript:;" v-for="item in classImgs[0].Records">
				<img :src="item.PictureWebp" alt="">
				<div class="class-imgtext">
					<p>{{item.SlideName}}</p>
					<p>{{item.Description}}</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      classImgs: []
    }
  },
  created () {
    this.getData()
  },
  methods:{
    getData:function(){
      this.$http.get('/api/classPin').then(function(opt){
        this.classImgs = opt.body.data
      })
    }
  }
}	
</script>

<style lang="less">
.class-imgs{
	display: -webkit-box;
	display: -webkit-flex;
	-webkit-flex-wrap:wrap;
	a{
		width:33.333%;
		display: block;
		img{
			display: block;
			width: 100%;
		}
	}
}
.class-imgtext{
	padding: .08rem 0;
	text-align: center;
	p:last-child{
		width: 80%;
		padding: 0 10%;
	    white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	color:#999;
	};
	p:first-child{
		color:#333;
		padding: 0 .12rem .05rem;
	};
}

</style>