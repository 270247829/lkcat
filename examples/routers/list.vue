<template>
<div>
    <!-- <List style="width:350px" :data="movieList" > -->
    <List  :data="movieList" type="card" :grid="grid" :pagination="pagination" :border="true">
        <!-- <div slot="header" >Header</div> -->
        <ListItem slot-scope="scope"  >
            <img slot="avatar" :src="scope.item.cover" style="width: 50px;height: 60px;"/>
            <h4 slot="title">{{scope.item.title}}</h4>
            <p >{{scope.item.url}}</p>
        </ListItem>
        <div slot="action" style="text-align:center;cursor:pointer"><Icon type="plus-round" size="60" color="#e6f6ff"></Icon></div>
        <!-- <div slot="footer">Footer</div> -->
    </List>

    <List style="width:350px;margin-top:20px" :data="movieList"  :border="true">
    <!-- <List  :data="movieList" type="card" :grid="{column:4,gutter:16}"> -->
        <!-- <div slot="header" >Header</div> -->
        <ListItem slot-scope="scope"  >
            <img slot="avatar" :src="scope.item.cover" style="width: 50px;height: 60px;"/>
            <h4 slot="title">{{scope.item.title}}</h4>
            <p >{{scope.item.url}}</p>
        </ListItem>
        <!-- <div slot="footer">Footer</div> -->
    </List>
    <br>
    <br>
</div>
</template>
<script>
    export default {
        data () {
            return {
                scope:{},
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
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520212236.jpg",title:"疯狂婚礼周",url:"https://movie.douban.com/subject/27031084/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518132366.jpg",title:"血观音",url:"https://movie.douban.com/subject/27113517/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",title:"红海行动",url:"https://movie.douban.com/subject/26861685/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg",title:"黑豹",url:"https://movie.douban.com/subject/6390825/"},
                ],
                pagination:{
                    current:1,
                    total:1,
                    pageSize:8,
                    size: "small",
                    showTotal: true,
                    simple: true
                },
                grid:{
                    column:4,gutter:16
                }
            }
        },
        methods: {
            changeLimit () {
                this.limitFrom = this.limitFrom === 0 ? 5 : 0;
            }
        },
        mounted(){
           this.pagination.total = this.movieList.length
        }
    }
</script>
