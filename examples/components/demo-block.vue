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
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: all linear .2s;
    .source {
        padding: 24px;
        > div {
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
        .highlight {
            pre {
                margin: 0;
                code {
                    display: block;
                    background: #fafafa;
                    padding: 18px 24px;
                    overflow-x: auto;
                }
            }
        }
    }
    &-control {
        border-top: 1px solid #eaeefb;
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #409eff;
        cursor: pointer;
        position: relative;
        &:hover {
            color: #005cf9;
            background-color: #f9fafc;
        }
    }
}
</style>

