<template>
	<button
		class="bt-button"
		@click="handleClick"
		:disabled="disabled"
		:type="nativeType"
		:class="[
			type ? 'bt-button--' + type : '',
			size ? 'bt-button--size-' + size : '',
			{
				'is-disabled': disabled,
				'is-plain': plain,
				'is-round': round,
			}
		]"
	>
		<i :class="icon" v-if="icon!= ''"></i>
		<slot></slot>
	</button>
</template>
<script>
export default {
    name: 'BtButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button' // 'button/submit/reset'
        },
        disabled: Boolean,
        plain: Boolean,
        round: Boolean
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
};
</script>