<template>
    <div :class="classString">
        <span :class="innerText">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    import { oneOf, findComponentUpward } from '../../utils/assist';
    import calcTextareaHeight from '../../utils/calcTextareaHeight';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'lkui';

    export default {
        name: 'Divider',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            },
            dashed: {
                type: Boolean,
                default: false
            },
            orientation: {
                validator (value) {
                    return oneOf(value, ['left', 'right']);
                }
            }
        },
        computed: {
            classString () {
                const { type, $slots, dashed, orientation = '' } = this
                const orientationPrefix = (orientation.length > 0) ? '-' + orientation : orientation

                return {
                    [`${prefixCls}-divider`]: true, [`${prefixCls}-divider-${type}`]: true,
                    [`${prefixCls}-divider-with-text${orientationPrefix}`]: $slots.default,
                    [`${prefixCls}-divider-dashed`]: !!dashed,
                }
            },
            innerText () {
                return prefixCls+'-divider-inner-text'
            }
        }
    }
</script>

