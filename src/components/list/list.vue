<template>
    <div :class="classes">
        <div :class="headerClass" v-if="showHeader">
            <slot name="header"></slot>
        </div>
        <template v-if="type!='card'">
            <div :class="itemClass" v-for="(item,index) in currentData" :key="index">
                <slot :item="item" :$index="index"></slot>
            </div>
        </template>
        <template v-else>
            <Row :gutter="grid.gutter">
                <Col :span="24/grid.column" v-for="(item,index) in currentData" :key="index">
                    <div :class="itemClass">
                        <Card>
                            <slot :item="item" :$index="index"></slot>
                        </Card>
                    </div>
                </Col>
                <Col :span="24/grid.column" v-if="showAction">
                    <div :class="itemClass">
                        <Card>
                            <slot name="action"></slot>
                        </Card>
                    </div>
                </Col>
            </Row>
        </template>
        <div :class="footerClass" v-if="showFooter">
            <slot name="footer"></slot>
        </div>
        <div :class="pageClass" v-if="showPagination">
            <Page :total="pagination.total" :current="pagination.current" :page-size="pagination.pageSize" :size="pagination.size"
                  :show-total="pagination.showTotal" :simple="pagination.simple"
                  @on-change="changePage"></Page>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'lkui-list';

    export default {
        name: 'List',
        props: {
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            item: {
                type: Object,
                default() {
                    return {};
                }
            },
            title: {
                type: String,
            },
            url: {
                type: String
            },
            content: {
                type: String
            },
            type: {
                type: String,
                default() {
                    return '';
                }
            },
            grid: {
                type: Object,
                default() {
                    return {column: 4, gutter: 16};
                }
            },
            pagination: {
                type: Object,
                default() {
                    return null;
                }
            },
            border: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                showContent: true
            };
        },
        computed: {
            classes() {
                return [`${prefixCls}`,
                    {
                        [`${prefixCls}-card`]: this.type == 'card',
                        [`${prefixCls}-border`]: this.border == true
                    }
                ];
            },
            itemClass() {
                return `${prefixCls}` + '-item';
            },
            headerClass() {
                return `${prefixCls}` + '-header';
            },
            footerClass() {
                return `${prefixCls}` + '-footer';
            },
            pageClass() {
                return `${prefixCls}` + '-page';
            },
            showHeader() {
                return this.$slots.header !== undefined;
            },
            showFooter() {
                return this.$slots.footer !== undefined;
            },
            showAction() {
                return this.$slots.action !== undefined;
            },
            showPagination() {
                return this.pagination != null;
            },
            currentData() {
                if (this.pagination == null) {
                    return this.data;
                }
                return this.data.slice(this.pagination.pageSize * (this.pagination.current - 1), this.pagination.pageSize * this.pagination.current);
            }
        },
        mounted() {

        },
        methods: {
            changePage(current) {
                this.pagination.current = current;
            }
        }

    };
</script>
