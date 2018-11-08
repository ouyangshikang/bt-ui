<template>
    <div id="app">
        <btHeader></btHeader>
        <div class="page-container">
            <div class="page-body">
                <btNav class="nav"></btNav>
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
#app {
    min-width: 1140px;
    height: 100vh;
    overflow-y: hidden;
}
.page-container {
    margin: 20px auto;
    width: 94%;
    min-height: 600px;
    box-shadow: rgb(223, 225, 230) 0px 4px 30px 0px;
    border-radius: 5px;
    .page-body {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .nav, .main {
            height: calc(100vh - 140px);
            overflow-y: scroll;
        }
        .nav {
            min-width: 250px;
            width: 18%;
        }
        .main {
            width: 82%;
            margin-top: 32px;
            padding: 0 48px;
        }
    }
}
</style>
