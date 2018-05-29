<template>
    <div class="list-item">
        <div class="item-left">
            <slot name="avatar"></slot>
        </div>
        <div class="item-right">
            <div class="headtitle">
                <slot name="title"></slot>
            </div>
            <div class="content">
                <slot> 
                </slot>
            </div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'lkui-list-item';
    
    export default {
        name: 'list-item',
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            item:{
                type: Object,
                default () {
                    return {};
                }  
            },
            title:{
                type:String,
            },
            url:{
               type:String 
            },
            content:{
                type:String,
            },
            pic:{
                type:String,
                default (val) {
                    if(val !=null){
                        this.picShow=true;
                    }
                    return val;
                }  
            }
        },
        data () {
            return {
               showHead:true,
               showContent:true,
            };
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            },
            picShow (){

                return this.pic!=null?this.picShow=true:this.picShow=false;
            }
            
        },
        mounted(){
              this.$nextTick(() => {
              })
           
        },

        methods:{

        }
        
    };
</script>
