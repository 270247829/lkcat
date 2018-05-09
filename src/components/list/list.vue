<template>
        <ul :class="classes">
            <li class="" v-for="(item,index) in data" :key="index">
              <slot :name="index"></slot>  
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
            }
        },
        data () {
            return {
               
            };
        },
        computed: {
            classes () {
                return `${prefixCls}-con`;
            }
            
        }
        
    };
</script>
