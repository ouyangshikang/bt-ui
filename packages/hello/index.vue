<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<span class="handsome">你真帅</span>
	</div>
</template>

<script>
export default {
    name: 'Hello',
    props: {
        msg: String
    }
};
</script>

<style>

</style>