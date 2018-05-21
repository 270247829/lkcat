<template>
    <List style="width:350px" :data="movieList" >
        <div slot="header" >Header</div>
        <ListItem slot-scope="scope" >
            <p >{{scope.item.url}}</p>
        </ListItem>
        <div slot="footer">Footer</div>
        <!-- <ListItem slot-scope="scope" :pic="scope.item.cover">
            <p slot="title">{{scope.item.title}}</p>
            <p >{{scope.item.url}}</p>
            <p slot="footer">索引：{{scope.$index}}</p>
        </ListItem> -->
    </List>
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
