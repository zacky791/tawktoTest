<template>
    <div class="container">
        <Topbar />
        <PageHeader />
        <Helper ref="helper" />
        <Hook v-slot="{ categoriesData }">
            <main id="background">
                <div class="categories-body-wrapper">
                    <Card v-for="x in categoriesData" :key="x.id" :id="x.id" :title="x.title" :image="getIcon(x.icon)"
                        :totalArticle="x.totalArticle" :lastUpdate="getTimeAgo(x.updatedOn)" />
                </div>
            </main>
        </Hook>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import Topbar from '../../components/Topbar.vue';
import PageHeader from '../../components/PageHeader.vue';
import Card from '../../components/Card.vue';
import Hook from './hook.vue';
import Helper from '../../helper/getIcon.vue';
import { differenceInDays } from 'date-fns';

export default {
    components: {
        Topbar,
        PageHeader,
        Card,
        Hook,
        Helper,
    },
    setup() {
        const helper = ref(null);

        const getIcon = (iconName) => {
            return helper.value.getIcon(iconName);
        };

        const getTimeAgo = (date) => {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        };

        return {
            helper,
            getIcon,
            getTimeAgo,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
@import '../../scss/main.scss';
</style>
