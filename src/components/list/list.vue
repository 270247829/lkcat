<template>
        <div :class="classes">
            <div :class="headerClass" v-if="showHeader">
                <slot name="header" ></slot>
            </div>
            <div :class="itemClass" v-for="(item,index) in data" :key="index">
                <slot :item="item" :$index="index"></slot>
            </div>
            <div :class="footerClass" v-if="showFooter">
                <slot name="footer" ></slot>
            </div>
        </div>
</template>
<script>
    const prefixCls = 'lkui-list';
    
    export default {
        name: 'List',
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
            }
        },
        data () {
            return {
               showHeader:true,
               showContent:true,
               showFooter:true
            };
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            },
            itemClass () {
                return `${prefixCls}`+'-item';
            },
            headerClass () {
                return `${prefixCls}`+'-header';
            },
            footerClass () {
                return `${prefixCls}`+'-footer';
            }
        },
        mounted(){
            if (this.$slots.header === undefined) {
                this.showHeader = false;
            }   
            if (this.$slots.footer === undefined) {
                this.showFooter = false;
            }               
            this.$nextTick(() => {
            this.initLeft();
            })
              
        },

        methods:{
           initLeft(){
              if(!this.imageUrl){
                 //console.log(this.$refs.itemRight);
                 for(var i=0;i<this.$refs.itemRight.length;i++){
                       this.$refs.itemRight[i].style.width='100%'; 
                 }
                 
              }
           }
        }
        
    };
</script>
