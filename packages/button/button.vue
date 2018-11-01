<template>
  <button
        class="bt-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :type="nativeType"
        :class="[
            type ? 'bt-button--' + type : '',
            buttonSize ? 'bt-button--' + buttonSize : '',
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
	name: 'btButton',
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