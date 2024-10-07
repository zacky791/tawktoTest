<template>
    <div class="container">
        <Topbar />
        <PageHeader />
        <Helper ref="helper" />
        <Hook @updateCategoriesSuggestion="updateCategoriesSuggestion" v-slot="{ categoriesData, categoryData }">
            <main>
                <Navigation :categoriesTitle="categoriesData.title" />
                <section class="category-wrapper">
                    <div class="category">
                        <img :src="getIcon(categoriesData.icon)" />
                        <div class="category-icon-wrapper">
                            <img class="category-file-icon" :src="fileIcon" />
                            <p>{{ categoryData.length }}</p>
                        </div>
                        <h2>{{ categoriesData.title }}</h2>
                        <p class="category-time">{{ getTimeWeek(categoriesData.updatedOn) }}</p>
                        <hr />
                        <img :src="infoIcon" class="category-info-icon" />
                        <p class="category-description">{{ categoriesData.description }}</p>
                    </div>
                    <article class="categories-wrapper">
                        <ArticleCard v-for="x in categoryData" :key="x.id" :title='x.title' :lastUpdate='x.updatedOn' />
                    </article>
                </section>
                <hr class="other-categories-divider" />
                <div class="other-categories-wrapper">
                    <h2 class="other-categories-title">Other categories</h2>
                    <button :class="currentIndex === 0 ? 'maxIndexReachedLeft' : 'leftButton'" @click="slideLeft">
                        <img :src="nextIcon" alt="Next" />
                    </button>
                    <div class="categories-body-wrapper">
                        <Card v-for="x in visibleCategories" :key="x.id" :id="x.id" :title="x.title"
                            :image="getIcon(x.icon)" :totalArticle="x.totalArticle" :lastUpdate="getTimeAgo(x.updatedOn)" />
                    </div>
                    <button :class="maxIndexReached ? 'maxIndexReachedRight' : 'rightButton'" @click="slideRight">
                        <img :src="nextIcon" alt="Next" />
                    </button>
                </div>
            </main>
        </Hook>
    </div>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';
import playIcon from '../../assets/icons/play.svg';
import infoIcon from '../../assets/icons/info.svg';
import Topbar from '../../components/Topbar.vue';
import PageHeader from '../../components/PageHeader.vue';
import Hook from './hook.vue';
import Helper from '../../helper/getIcon.vue';
import Card from '../../components/Card.vue';
import ArticleCard from '../../components/ArticleCard.vue';
import { differenceInDays } from 'date-fns';
import fileIcon from '../../assets/icons/file.svg';
import nextIcon from '../../assets/icons/next-icon.svg';
import Navigation from '../../components/Navigation.vue';

export default defineComponent({
    components: { Topbar, PageHeader, Hook, Helper, Card, ArticleCard, Navigation },
    setup() {
        const helper = ref(null);
        const currentIndex = ref(0);
        const itemsPerSlide = 3;
        const categoriesSuggestion = ref([]);

        const visibleCategories = computed(() => {
            return categoriesSuggestion.value.slice(currentIndex.value, currentIndex.value + itemsPerSlide);
        });

        const maxIndexReached = computed(() => {
            return currentIndex.value + itemsPerSlide >= categoriesSuggestion.value.length;
        });

        const updateCategoriesSuggestion = (categories) => {
            categoriesSuggestion.value = categories;
        };

        const getIcon = (iconName) => {
            return helper.value.getIcon(iconName);
        };

        const getTimeAgo = (date) => {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        };

        const getTimeWeek = (date) => {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            const weeksAgo = Math.floor(daysAgo / 7);
            return `${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`;
        };

        const slideLeft = () => {
            if (currentIndex.value > 0) {
                currentIndex.value -= itemsPerSlide;
            }
        };

        const slideRight = () => {
            if (currentIndex.value + itemsPerSlide < categoriesSuggestion.value.length) {
                currentIndex.value += itemsPerSlide;
            }
        };

        return {
            helper,
            currentIndex,
            itemsPerSlide,
            categoriesSuggestion,
            visibleCategories,
            maxIndexReached,
            updateCategoriesSuggestion,
            getIcon,
            getTimeAgo,
            getTimeWeek,
            slideLeft,
            slideRight,
            playIcon,
            infoIcon,
            fileIcon,
            nextIcon
        };
    },
});
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
@import '../../scss/main.scss';
</style>
