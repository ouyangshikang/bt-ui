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
}
.page-container {
    margin: 40px auto;
    width: 90%;
    min-height: 600px;
    box-shadow: rgba(223, 225, 230, 0.5) 0px 4px 30px 0px;
    .page-body {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .nav {
            min-width: 200px;
            width: 18%
        }
        .main {
            width: 82%;
            padding: 32px 48px 48px;
        }
    }
}
</style>
