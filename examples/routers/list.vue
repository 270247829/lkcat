<template>
    <List style="width:350px" :data="movieList" >
             <div slot-scope="{item}">
                <div class="item-left">
                       <img slot="pic" :src="item.cover"/>
                </div>
                <div class="item-right">
                    <div class="headtitle"><p slot="title">{{item.title}}</p></div>
                     <div class="content"><p slot="content">{{item.url}}</p></div>
                     <div slot="footer">评分：34</div>
                </div>
            </div>

    </List>
</template>
<script>
    export default {
        data () {
            return {
                limitNum: 5,
                imageUrl:false,
                limitFrom: 0,
                movieList: [
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513360824.jpg",title:"昆池岩",url:"https://movie.douban.com/subject/26945085/"},
                   {cover:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2514384737.jpg",title:"现在去见你",url:"https://movie.douban.com/subject/27018285/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520212236.jpg",title:"疯狂婚礼周",url:"https://movie.douban.com/subject/27031084/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518132366.jpg",title:"血观音",url:"https://movie.douban.com/subject/27113517/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",title:"红海行动",url:"https://movie.douban.com/subject/26861685/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg",title:"黑豹",url:"https://movie.douban.com/subject/6390825/"},
                ]
            }
        },
        methods: {
            changeLimit () {
                this.limitFrom = this.limitFrom === 0 ? 5 : 0;
            }
        }
    }
</script>
