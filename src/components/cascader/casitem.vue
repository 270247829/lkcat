<template>
    <li :class="classes">
        {{ data.label }}
        <i v-if="showArrow" class="lkui-icon lkui-icon-ios-arrow-right"></i>
        <i v-if="showLoading" class="lkui-icon lkui-icon-load-c lkui-load-loop"></i>
    </li>
</template>
<script>
    export default {
        name: 'Casitem',
        props: {
            data: Object,
            prefixCls: String,
            tmpItem: Object
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-menu-item`,
                    {
                        [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
                        [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled
                    }
                ];
            },
            showArrow () {
                return (this.data.children && this.data.children.length) || ('loading' in this.data && !this.data.loading);
            },
            showLoading () {
                return 'loading' in this.data && this.data.loading;
            }
        }
    };
</script>
