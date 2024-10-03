<template>
    <div id="container">
        <Topbar />
        <PageHeader />
        <Helper ref="helper" />
        <Hook v-slot="{ categoriesData }">
            <main id="background">
                <div id="body-wrapper">
                    <Card v-for="x in categoriesData" :key="x.id" :id="x.id" :title="x.title" :image="getIcon(x.icon)"
                        :totalArticle="x.totalArticle" :lastUpdate="getTimeAgo(x.updatedOn)" />
                </div>
            </main>
        </Hook>
    </div>
</template>
  

<script>
import Topbar from '../../components/Topbar.vue';
import PageHeader from '../../components/PageHeader.vue';
import Card from '../../components/Card.vue';
import Hook from './hook.vue';
import Helper from '../../helper/getIcon.vue'
import { differenceInDays } from 'date-fns';

export default {
    components: {
        Topbar,
        PageHeader,
        Card,
        Hook,
        Helper,
    },
    methods: {
        getIcon(iconName) {
            return this.$refs.helper.getIcon(iconName);
        },
        getTimeAgo(date) {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#container {
    font-family: $font-family;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#background {
    width: 100vw;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
}

#body-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 20px;
}

#body-wrapper>* {
    // flex : growth , shrink , basic(initial amount)
    // Each item takes 1/3 of the width minus the gap 
    flex: 1 1 calc(33.333% - 20px);
    margin-bottom: 20px;
    box-sizing: border-box;
}

.body-content {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    padding: 40px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    img {
        margin-bottom: 20px;
        width: 50px;
        height: auto;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .articles {
        color: #3ba83b;
        font-weight: bold;
    }

    .last-updated {
        color: #9b9b9b;
        font-size: 14px;
    }

    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
}

.no-style {
    text-decoration: none;
    color: inherit;
}
</style>
