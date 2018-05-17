<template>
    <transition name="fade">
        <div :class="classes" v-if="fullscreenVisible">
            <div :class="mainClasses" >
                <div id="one" v-if="type=='one'">
                    <div id="loading-center" >
                        <div id="loading-center-absolute">
                            <div class="object m1" id="object_one"></div>
                            <div class="object m2" id="object_two" style="left:20px;"></div>
                            <div class="object m1" id="object_three" style="left:40px;"></div>
                            <div class="object m2" id="object_four" style="left:60px;"></div>
                        </div>
                    </div>
                </div>
                <div id="two" v-else-if="type=='two'">
                    <div id="loading-center">
                    <div id="loading-center-absolute">
                    <div class="object" id="object_one"></div>
                    <div class="object" id="object_two"></div>
                    <div class="object" id="object_three"></div>
                    <div class="object" id="object_four"></div>
                    <div class="object" id="object_five"></div>
                    <div class="object" id="object_six"></div>
                    <div class="object" id="object_seven"></div>
                    <div class="object" id="object_eight"></div>
                    <div class="object" id="object_big"></div>
                    </div>
                    </div>
                </div>
                <div id="three"  v-else-if="type=='three'">
                    <div id="loading-center">
                    <div id="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    </div>
                    </div>
                </div>
                <span :class="dotClasses"  v-else></span>
                <div :class="textClasses"><slot></slot></div>
            </div>


        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import ScrollbarMixins from '../modal/mixins-scrollbar';

    const prefixCls = 'lkui-spin';

    export default {
        name: 'Spin',
        mixins: [ ScrollbarMixins ],
        props: {
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            fix: {
                type: Boolean,
                default: false
            },
            fullscreen: {
                type: Boolean,
                default: false
            },
            type:{
                type: String,
                default: 'two'
            }
        },
        data () {
            return {
                showText: false,
                // used for $Spin
                visible: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-fix`]: this.fix,
                        [`${prefixCls}-show-text`]: this.showText,
                        [`${prefixCls}-fullscreen`]: this.fullscreen
                    }
                ];
            },
            mainClasses () {
                return `${prefixCls}-main`;
            },
            dotClasses () {
                return `${prefixCls}-dot`;
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            fullscreenVisible () {
                if (this.fullscreen) {
                    return this.visible;
                } else {
                    return true;
                }
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.addScrollEffect();
                } else {
                    this.removeScrollEffect();
                }
            }
        },
        mounted () {
            this.showText = this.$slots.default !== undefined;
        }
    };
</script>
