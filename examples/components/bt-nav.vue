<template>
	<div class="side-nav">
		<div
            class="group-container"
            v-for="(title, index) in Object.keys(data)"
            :key="index"
        >
            <p class="side-nav-title">{{title}}</p>
            <div
                class="side-nav-items"
                v-for="(nav, index) in data[title]"
                :key="index"
            >
                <p class="side-nav-group" v-if="nav.children">{{nav.name}}</p>
                <router-link
                    :to="{name: nav.name}"
                    :class="$route.name === nav.name ? 'active' : ''"
                    v-else
                >
                    {{nav.name}}
                </router-link>

                <div
                    v-for="(item, index) in nav.children"
                    :key="index"
                >
                    <router-link
                        :to="{name: item.name}"
                        :class="$route.name === item.name ? 'active' : ''"
                        class="side-nav-component"
                    >
                    {{item.name}}
                    </router-link>
                </div>

            </div>
		</div>
	</div>
</template>

<script>
import routeConf from '../config/routes.json';

export default {
    name:'bt-nav',
    data() {
        return {
            data: routeConf
        };
    },
    created() {
    }
};

</script>

<style lang="scss">
.side-nav {
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    .group-container {
        margin-bottom: 25px;
        .side-nav-title {
            color: #333333;
            padding: 0 24px 8px;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .side-nav-items {
            font-size: 14px;
            font-weight: normal;
            line-height: 1.8;
            a {
                display: block;
                color: #3F536E;
                padding: 8px 24px;
                position: relative;
                line-height: 1.5;
                cursor: pointer;
                &:hover, &.active {
                    color: #005cf9;
                }
            }
            .side-nav-group{
                padding-left: 24px;
                color: #616367;
                font-size: 12px;
                font-weight: bold;
            }
            .side-nav-component {
                display: block;
                position: relative;
                padding: 6px 24px 6px 32px;
                color: #616367;
                font-size: 14px;
                &:hover {
                    color: #005cf9;
                }
            }
        }
    }
}
</style>
