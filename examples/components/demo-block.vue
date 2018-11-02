<template>
  <div class="demo-block">
      <slot name="source"></slot>
      <div class="meta" :style="{height: isExpand ? 'auto' : '0'}">
          <div class="description">
              <slot></slot>
          </div>
          <slot name="highlight"></slot>
      </div>
      <div class="demo-block-control" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</div>
  </div>
</template>

<script>

export default {
    name: 'demo-block',
    data() {
        return {
            isExpand: false
        };
    },
    methods: {
        toggle() {
            this.isExpand = !this.isExpand;
        }
    }
};
</script>

<style lang="scss">
.demo-block{
    margin: 15px auto;
    padding: 20px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    .source {
        padding: 24px;
        div {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0px;
            }
        }
    }
    .meta {
        background-color: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height .2s;
        .description {
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            font-size: 14px;
            line-height: 22px;
            color: #666;
            word-break: break-word;
            margin: 10px;
            background-color: #fff;
        }
    }
    &-control {
        border-top: 1px solid #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
    }
}
</style>

