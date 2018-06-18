<template>
    <div>
        <TreeSelect :data="treeData1" :multiple="true" allow-clear style="width:300px" @select="onSelect" @clear="onClear">

        </TreeSelect>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            treeData1: [{
                title: 'parent 1',
                expanded: true,
                children: [{
                title: 'parent 1-0',
                expanded: true,
                children: [{
                    title: 'my leaf',
                }, {
                    title: 'your leaf',
                }]
                }, {
                title: 'parent 1-1',
                children: [{
                    title: "abc"
                }]
                }]
            }],
            }
        },
        methods: {
            onSelect(data) {
                console.log(data);
            },
            onClear(data) {
                console.log('clear', data);
            }
        }
    }
</script>
