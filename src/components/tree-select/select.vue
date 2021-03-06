<template>
    <div :class="wrapCls" style="width: 120px;" ref="inputArea" v-clickoutside="closeDropdown">
        <span @click="toggleDropdown" :class="selectionCls" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="true" tabindex="0">
            <ul v-if="multiple" class="lkui-tree-select-selection__rendered">
                <li v-for="(item,index) in innerValue" unselectable="unselectable" class="lkui-tree-select-selection__choice" :title="item.text" style="-webkit-user-select: none;">
                    <span class="lkui-tree-select-selection__choice__remove lkui-icon lkui-icon-close" @click="clearSingle(item,index)"></span>
                    <span class="lkui-tree-select-selection__choice__content" v-text="item.text"></span>
                </li>
                <li class="lkui-tree-select-search lkui-tree-select-search--inline">
                    <span class="lkui-tree-select-search__field__wrap">
                        <input value="" class="lkui-tree-select-search__field" role="textbox">
                    </span>
                </li>
            </ul>
            <div v-else class="lkui-tree-select-selection__rendered">
                <span v-show="innerValue.length" v-text="innerValue.length?innerValue[0].text:''"></span>
            </div>
            <span class="lkui-tree-select-search__field__placeholder" v-show="!innerValue.length" style="padding-left:8px">{{placeholder}}</span>
            <span v-if="allowClear && innerValue.length" class="lkui-tree-select-selection__clear lkui-icon lkui-icon-ios-close-outline" @click.stop="clearSelected"></span>
            <span class="lkui-tree-select-arrow lkui-icon lkui-icon-ios-arrow-down lkui-select-arrow" unselectable="unselectable" style="-webkit-user-select: none;"></span>
        </span>
         <transition name="slide-up">
            <div :class="dropdownCls" style="max-height: 300px; overflow: auto; padding: 5px;" :style="style" v-show="open" @click='hide' ref="dropdown">
                <div>
                    <span v-if="search" class="lkui-tree-select-dropdown-search">
                        <span class="lkui-tree-select-search__field__wrap">
                            <input v-model="searchValue" class="lkui-tree-select-search__field" role="textbox">
                        </span>
                    </span>
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import { getOffset } from '../../utils/fn';
    import clickoutside from '../../directives/clickoutside';

    export default {
        directives: { clickoutside },
        data() {
            return {
                prefix: 'lkui-tree-select',
                style: {},
                container: null,
                open: false,
                searchValue: '',
                innerValue: [...this.value],
            };
        },
        props: {
            search: {
                type: Boolean,
                default: false,
            },
            popupContainer: {
                type: Function,
                default: () => document.body,
            },
            placeholder: String,
            position: {
                type: String,
                default: 'absolute',
            },
            multiple: {
                type: Boolean,
                default: false,
            },
            allowClear: {
                type: Boolean,
                default: false,
            },
            value: {
                type: Array,
                default: () => [],
            },
        },
        mounted() {
            // document.addEventListener('click', () => this.open = false);
            this.container = this.popupContainer();
            this.$refs.dropdown.style.position = this.position;
            this.container.appendChild(this.$refs.dropdown);
    
            this.$nextTick(() => {
                this.setPosition();
            });

            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(() => {
                    this.setPosition();
                }, 200);
            });
        },
        beforeDestroy() {
            this.container.removeChild(this.$refs.dropdown);
        },
        computed: {
            wrapCls() {
                return [
                    this.prefix,
                    `${this.prefix}-enabled`,
                    { [`${this.prefix}-open`]: this.open },
                ];
            },
            selectionCls() {
                const multiple = this.multiple ? 'multiple' : 'single';

                return [
                    `${this.prefix}-selection`,
                    `${this.prefix}-selection--${multiple}`,
                ];
            },
            placeholderCls() {
                return [
                    { [`${this.prefix}-selection__placeholder`]: !this.innerValue.length },
                ];
            },
            dropdownCls() {
                const multiple = this.multiple ? 'multiple' : 'single';

                return [
                    `${this.prefix}-dropdown`,
                    `${this.prefix}-tree-dropdown`,
                    `${this.prefix}-dropdown--${multiple}`,
                    `${this.prefix}-dropdown-placement-bottomLeft`,
                ];
            },
        },
        watch: {
            searchValue(val) {
                this.$emit('search', val);
            },
            innerValue(val) {
                this.$emit('input', val);
            },
            value(val) {
                this.innerValue = val;
            },
        },
        methods: {
            setPosition() {
                if (!this.$el) return;
                const p = getOffset(this.$refs.inputArea, this.container);

                this.style = {
                    top: `${p.bottom + 4}px`,
                    left: `${p.left}px`,
                    minWidth: `${p.right - p.left}px`,
                };
            },
            toggleDropdown() {
                this.open = !this.open;
            },
            closeDropdown() {
                this.open = false;
            },
            clearSelected() {
                this.$emit('clear', this.innerValue);
                this.innerValue = [];
            },
            clearSingle(item,index) {
                const deleteEle = this.innerValue.splice(index, 1);
                this.$emit('clear', deleteEle);
            },
            hide(event) {
                event.stopPropagation();
            },
        },
    };
</script>
