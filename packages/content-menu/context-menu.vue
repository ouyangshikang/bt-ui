<template>
    <div
        class="context-menu"
        :style="{
            left: this.x + 'px',
            top: this.y + 'px'
        }"
        v-if="menuVisible"
        @mousedown.stop
        @contextmenu.prevent
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BtContextMenu',
    props: {
        target: {
            default: null
        },
        transferIndex: {
            type: Number,
            default: 0
        },
        menuVisible: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        targetElem() {
            return document.querySelectorAll(this.target)[this.transferIndex];
        }
    },
    data() {
        return {
            x: null,
            y: null
        };
    },
    methods: {
        // init bindEvent
        bindEvents() {
            this.$nextTick(() => {
                const initTarget = document.querySelectorAll(this.target)[0];
                // 初始时为undefined
                if(!this.targetElem) {
                    initTarget.addEventListener('contextmenu', this.contextMenuHandler, false);
                    return;
                }
                this.targetElem.addEventListener('contextmenu', this.contextMenuHandler, false);
            });
        },
        unbindEvents() {
            const target = document.querySelectorAll(this.target);
            target.forEach(targetElem => {
                targetElem.removeEventListener('contextmenu', this.contextMenuHandler, false);
            });
        },
        // 右键事件
        contextMenuHandler(e) {
            e.preventDefault();
            this.x = e.clientX;
            this.y = e.clientY - 138;
            this.$emit('update:visible', true);
        },

        // 绑定隐藏菜单事件
        bindHideEvents() {
            document.addEventListener('mousedown', this.clickDocumentHandler, false);
            document.addEventListener('mousewheel', this.clickDocumentHandler, false);
        },

        // 取消绑定隐藏菜单事件
        unbindHideEvents() {
            document.removeEventListener('mousedown', this.clickDocumentHandler, false);
            document.removeEventListener('mousewheel', this.clickDocumentHandler, false);
        },
        clickDocumentHandler() {
            this.$emit('update:visible', false);
        }

    },
    mounted() {
        this.bindEvents();
    },
    beforeDestroy() {
        this.unbindEvents();
    },
    watch: {
        menuVisible(val) {
            if(val) {
                this.bindHideEvents();
            }
            else {
                this.unbindHideEvents();
            }
        },
        targetElem() {
            this.bindEvents();
        }
    }
};
</script>

<style lang="scss" scoped>
.context-menu {
    position: fixed;
    border: 1px solid #EFF1F6;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow:0px 10px 14px 0px rgba(53, 100, 175, 0.15);
    background-color: #ffffff;
    z-index: 999;
}
</style>
