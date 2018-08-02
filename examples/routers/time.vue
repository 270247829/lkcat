<template>
    <div>
        <Time :time="time1" />
        <br>
        <Time :time="time2" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                time1: (new Date()).getTime() - 60 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000
            }
        }
    }
</script>
