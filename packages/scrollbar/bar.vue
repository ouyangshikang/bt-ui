<template>
    <div
        class="bt-scrollbar__bar"
        ref="scrollBar"
        @mousedown="clickTrackHandler($event)"
        :class="[ vertical ? 'is-vertical' : 'is-horizontal', {'draging': cursorClick}]"
    >
        <div
            class="bt-scrollbar__thumb"
            :class="{'draging': cursorClick}"
            ref="thumb"
            @mousedown="clickThumbHandler($event)"
            :style="thumbStyle"
        ></div>
    </div>
</template>

<script>
const BARMAP = {
    vertical: {
        coord: 'Y',
        width: 'height',
        height: 'width',
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        client: 'clientY',
        direction: 'top',
        scrollSize: 'scrollHeight'
    },
    horizontal: {
        coord: 'X',
        width: 'width',
        height: 'height',
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        client: 'clientX',
        direction: 'left',
        scrollSize: 'scrollWidth'
    }
};

export default {
    name: 'bar',
    props: {
        vertical: {
            type: Boolean,
            default: true
        },
        width: String,
        move: Number
    },
    data() {
        return {
            cursorClick: false
        };
    },
    computed: {
        bar() {
            return BARMAP[this.vertical ?  'vertical' : 'horizontal'];
        },
        thumbStyle() {
            const style = {};
            const bar = this.bar;
            const translate = `translate${bar.coord}(${ this.move }%)`;
            style[bar.width] = this.width;

            style.transform = translate;
            style.msTransform = translate;
            style.webkitTransform = translate;
            // console.log(style);
            return style;
        },
        wrap() {
            return this.$parent.wrap;
        }
    },
    methods: {
        clickTrackHandler(e) {
            const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
            const thumbHalf = (this.$refs.thumb[this.bar.offset] / 2);
            const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset]);

            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        },
        clickThumbHandler(e) {
            const curTarget = e.currentTarget;
            // this.X = 132;
            this[this.bar.coord] = curTarget[this.bar.offset] -
            (
                e[this.bar.client] - curTarget.getBoundingClientRect()[this.bar.direction]
            );
            this.dragThumb(e);
        },
        dragThumb(e) {
            e.stopImmediatePropagation();
            this.cursorClick = true;
            document.addEventListener('mousemove', this.onMouseMoveHandle, false);
            document.addEventListener('mouseup', this.onMouseUpHandle, false);
        },
        onMouseMoveHandle(e) {
            if(!this.cursorClick) {
                return;
            }
            const bar = this.bar;
            const thumb = this.$refs.thumb;
            const initPosition = this[bar.coord];
            if(!initPosition) {
                return;
            }


            const offset = ((this.$el.getBoundingClientRect()[bar.direction] - e[bar.client]) * -1);

            const thumbClickPosition = thumb[bar.offset] - initPosition;
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[bar.offset]);

            this.wrap[bar.scroll] = (thumbPositionPercentage * this.wrap[bar.scrollSize] / 100);
            console.log(offset, thumb[bar.offset], initPosition, thumbClickPosition);

        },
        onMouseUpHandle() {
            console.log('mouse up');
            this.cursorClick = false;


            document.removeEventListener('mousemove', this.onMouseMoveHandle, false);
        }
    },
    destroyed() {
        document.removeEventListener('mouseup', this.onMouseUpHandle, false);
    }
};
</script>
