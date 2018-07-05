<template>
    <div>
        <lk-progress :percent="percent"></lk-progress>
        <Button-group size="large">
            <Button icon="ios-plus-empty" @click.native="add"></Button>
            <Button icon="ios-minus-empty" @click.native="minus"></Button>
        </Button-group>
        <lk-progress :percent="25" :stroke-width="5"></lk-progress>
        <lk-progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
        </lk-progress>
        <lk-progress :percent="percent"></lk-progress>
        <div style="height: 150px">
            <lk-progress vertical :percent="percent" :stroke-width="20" hide-info></lk-progress>
            <lk-progress vertical :percent="percent"></lk-progress>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
