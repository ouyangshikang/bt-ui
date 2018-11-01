<template>
    <div id="app">
        <bt-header></bt-header>
        <div class="page-container">
            <div class="page-body">
                <bt-nav class="nav"></bt-nav>
                <router-view class="main"/>
            </div>
        </div>
    </div>
</template>


<script>
import btHeader from './components/bt-header';
import btNav from './components/bt-nav';

export default {
    components: {
        btHeader,
        btNav
    }
};
</script>



<style lang="scss">
.page-container {
    margin: 48px auto;
    width: 90%;
    min-height: 600px;
    box-shadow: rgba(223, 225, 230, 0.5) 0px 4px 30px 0px;
    .page-body {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .nav {
            width: 200px;
        }
        .main {
            width: 1000px;
            padding: 32px 48px 48px;
        }
    }
}
</style>
