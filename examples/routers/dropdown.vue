<template>
    <div>
        <Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
                click 触发
                <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <Dropdown>
            <a href="javascript:void(0)">
                北京小吃
                <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <Dropdown placement="right">
                    <DropdownItem>
                        北京烤鸭
                        <Icon type="ios-arrow-right"></Icon>
                    </DropdownItem>
                    <div slot="list">
                        <DropdownItem>挂炉烤鸭</DropdownItem>
                        <DropdownItem>焖炉烤鸭</DropdownItem>
                    </div>
                </Dropdown>
                <DropdownItem>冰糖葫芦</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>

</template>
<script>
    export default {

    }
</script>
