<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'lkui-layout';
    export default {
        name: 'Header',
        computed: {
            wrapClasses () {
                return `${prefixCls}-header`;
            }
        }
    };
</script>