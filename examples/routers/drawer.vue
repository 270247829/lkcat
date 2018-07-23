<template>
    <div>
        <Button @click="instance()">drawer</Button>
        <Drawer v-model="show" title="Basic Drawer" :closable="false" :footerHide="true" placement="left" >
            <p>
                Some contents...
            </p>
            <p>
                Some contents...
            </p>
            <p>
                Some contents...
            </p>
        </Drawer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show:false
            }
        },
        methods: {
            instance () {
               this.show = true;

            }
        }
    }
</script>
