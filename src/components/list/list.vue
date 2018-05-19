<template>
        <ul :class="classes">
            <li class="" v-for="(item,index) in data" :key="index">
              <slot :item="item">
              <slot name="left">
                  <div  class="item-left" v-if="imageUrl">
                      <slot name="pic">
                            <img class="imageStyle"  :src="url"/>
                      </slot>
                  </div>
              </slot>
              <slot name="right">
                  <div class="item-right" ref="itemRight">
                   <div class="headtitle" v-if="showHead">
                    <slot name="title">
                        <p v-if="title">
                            {{title}}
                        </p>
                    </slot>
                  </div>
                  <div class="content" v-if="showContent">
                      <slot name="content">
                          <p v-if="content">
                              {{content}}
                          </p>
                      </slot>
                  </div>
                  <slot name="footer"></slot>
              </div>
              </slot>
               
              </slot>
            </li>   
        </ul>
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
            },
            imageUrl:{
                type:Boolean,
                default:true
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
                return `${prefixCls}-con`;
            }

            
        },
        mounted(){
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
