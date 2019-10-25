<template>
    <transition name="silder-fade">
        <div
            :class="bem()"
            v-if="visible"
        >
            <span :class="bem('close')" @click="close">+</span>
            <video
                :class="bem('player')"
                :src="url"
                controls
                preload="metadata"
                muted="muted"
            >
                你的浏览器不支持 <code>video</code> 标签.
            </video>
        </div>
    </transition>
</template>

<script>
import bemMixin from '../mixins/bem';

export default {
    name: 'video-dialog',
    mixins: [bemMixin],
    data() {
        return {
            visible: false,
            url: ''
        };
    },
    watch: {
        visible(value) {
            if (value) {
                this.callback(value);
            }
            else {
                this.callback(value);
            }
        }
    },
    beforeDestroy() {
        document.body.removeChild(this.$el);
    },
    methods: {
        close() {
            this.visible = false;
            document.documentElement.style.overflow = '';
        }
    }
};
</script>

<style lang="less">
@import "../../styles/index.less";

.@{video-dialog} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    z-index: 999;
    &__close {
        position: absolute;
        top: calc(50% - 242px);
        left: calc(50% + 500px);
        font-size: 46px;
        font-weight: 200;
        color: @color-white;
        transform: rotate(45deg);
        cursor: pointer;
    }
    &__player {
        margin: auto;
        width: 965px;
        height: 544px;
        outline: 0;
        cursor: pointer;
    }
}

.silder-fade-enter-active {
    animation: silder-fade-in .3s;
}

.silder-fade-leave-active {
    animation: silder-fade-out .3s;
}

@keyframes silder-fade-in {
    0% {
        transform: translate3d(0, -40px, 0);
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes silder-fade-out {
    0% {
        opacity: 1;
    }
    100% {
        transform: translate3d(0, -20px, 0);
        opacity: 0;
    }
}

</style>
