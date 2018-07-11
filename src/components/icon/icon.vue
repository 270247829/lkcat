<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    const prefixCls = 'lkui-icon';

    export default {
        name: 'Icon',
        props: {
            type: String,
            size: [Number, String],
            color: String,
            custom:String
        },
        computed: {
            classes () {
                if(this.custom) {
                    return `${prefixCls} ${this.custom} icon-${this.type}`;
                }else{
                    return `${prefixCls} ${prefixCls}-${this.type}`;
                }
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        }
    };
</script>
