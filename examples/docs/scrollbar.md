### scrollbar

:::demo
```html
<bt-scrollbar>
    <div class="multiple-page">
        <ul class="pages-list">
            <li v-for="(layout, index) in layouts" :key="index" class="pages-layout"></li>
        </ul>
        <div class="pages-layout add" @click="Addlayouts">+</div>
    </div>
</bt-scrollbar>

<script>
    export default {
        data() {
            return {
                layouts: [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
            }
        },
        methods: {
            Addlayouts() {
                this.layouts.push(1);
            },
        }
    }
</script>

<style lang="scss">
    .bt-scrollbar {
        border: 1px solid #80a0fb;
    }
    .multiple-page {
        display: inline-flex;
        margin: auto;
    }
    .pages-list {
        display: inline-flex;
        align-items: center;
        padding: 0;
    }
    .pages-layout {
        display: inline-block;
        height: 54px;
        width: 80px;
        margin-left: 8px;
        border: 1px solid #412345;
        &.add {
            margin-top: 16px;
            text-align: center;
            font-size: 42px;
            cursor: pointer;
        }
    }
</style>
```
:::