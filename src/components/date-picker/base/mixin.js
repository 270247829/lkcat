
import {clearHours,setHours} from '../util';

export default {
    props: {
        tableDate: {
            type: Date,
            required: true
        },
        disabledDate: {
            type: Function
        },
        selectionMode: {
            type: String,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        rangeState: {
            type: Object,
            default: () => ({
                from: null,
                to: null,
                selecting: false
            })
        },

    },
    computed: {
        dates(){
            const {selectionMode, value, rangeState} = this;
            const rangeSelecting = selectionMode === 'range' && rangeState.selecting;
            return rangeSelecting ? [rangeState.from] : value;
        },
    },
    methods: {
        handleClick (cell,timesOptions) {
            let hours,minutes,seconds;
            if(timesOptions && timesOptions.value){
                hours = timesOptions.value[0];
                minutes = timesOptions.value[1];
                seconds = timesOptions.value[2];
            }else{
                let currentTime = new Date();
                hours = currentTime.getHours();
                minutes = currentTime.getMinutes();
                seconds = currentTime.getSeconds();
            }
            if (cell.disabled || cell.type === 'weekLabel') return;
            // const newDate = new Date(clearHours(cell.date));
            const newDate = new Date(setHours(cell.date,hours,minutes,seconds));
            this.$emit('on-pick', newDate);
            this.$emit('on-pick-click');
        },
        handleMouseMove (cell) {
            if (!this.rangeState.selecting) return;
            if (cell.disabled) return;
            const newDate = cell.date;
            this.$emit('on-change-range', newDate);
        },
    }
};
