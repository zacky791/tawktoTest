<template>
    <div class="container">
        <Topbar />
        <PageHeader />
        <Helper ref="helper" />
        <Hook @updateCategoriesSuggestion="updateCategoriesSuggestion" v-slot="{ categoriesData, categoryData }">
            <main class="body">
                <Navigation :categoriesTitle="categoriesData.title" />
                <section class="main-content">
                    <div class="category">
                        <img :src="getIcon(categoriesData.icon)" />
                        <div class="file">
                            <img class="file-icon" :src="fileIcon" />
                            <p>{{ categoryData.length }}</p>
                        </div>
                        <h2>{{ categoriesData.title }}</h2>
                        <p class="category-time">{{ getTimeWeek(categoriesData.updatedOn) }}</p>
                        <hr class="divider" />
                        <img :src="infoIcon" class="info-icon" />
                        <p class="category-description">{{ categoriesData.description }}</p>
                    </div>
                    <article class="categories">
                        <ArticleCard v-for=" x  in  categoryData " :key="x.id" :title='x.title' :lastUpdate='x.updatedOn' />
                    </article>
                </section>
                <hr class="divider-popular-categories" />
                <div id="background">
                    <h2>Other categories</h2>
                    <button :class="currentIndex === 0 ? 'maxIndexReachedLeft' : 'leftButton'" @click="slideLeft">
                        <img :src="nextIcon" alt="Next" />
                    </button>
                    <div id="body-wrapper">
                        <Card v-for=" x  in  visibleCategories " :key="x.id" :id="x.id" :title="x.title"
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
import playIcon from '../../assets/icons/play.svg';
import infoIcon from '../../assets/icons/info.svg'
import Topbar from '../../components/Topbar.vue';
import PageHeader from '../../components/PageHeader.vue';
import Hook from './hook.vue';
import Helper from '../../helper/getIcon.vue'
import Card from '../../components/Card.vue';
import ArticleCard from '../../components/ArticleCard.vue';
import { differenceInDays } from 'date-fns';
import fileIcon from '../../assets/icons/file.svg';
import nextIcon from '../../assets/icons/next-icon.svg'
import Navigation from '../../components/Navigation.vue';

export default {
    components: { Topbar, PageHeader, Hook, Helper, Card, ArticleCard, Navigation },
    data: () => {
        return {
            playIcon,
            infoIcon,
            fileIcon,
            nextIcon,
            currentIndex: 0,
            itemsPerSlide: 3,
        }
    },
    computed: {
        visibleCategories() {
            return this.categoriesSuggestion.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
        },
        maxIndexReached() {
            return this.currentIndex + this.itemsPerSlide >= this.categoriesSuggestion.length;
        }
    },
    methods: {
        updateCategoriesSuggestion(categories) {
            this.categoriesSuggestion = categories;
        },
        getIcon(iconName) {
            return this.$refs.helper.getIcon(iconName);
        },
        getTimeAgo(date) {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        },
        getTimeWeek(date) {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            const weeksAgo = Math.floor(daysAgo / 7);
            return `${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`;
        },
        slideLeft() {
            if (this.currentIndex > 0) {
                this.currentIndex -= this.itemsPerSlide;
            }
        },
        slideRight() {
            if (this.currentIndex + this.itemsPerSlide < this.categoriesSuggestion.length) {
                this.currentIndex += this.itemsPerSlide;
            }
        },
    },
}
</script>
  
<style lang="scss" scoped>
@import '../../scss/_variables.scss';


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.container {
    font-family: $font-family;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.body {
    background-color: #fafafa;
    width: 100vw;
    padding-top: 20px;
    padding-bottom: 20px;
}

.main-content {
    display: flex;
    gap: 100px;
    justify-content: center;
}

#background {
    width: 100vw;
    background-color: #fafafa;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

#body-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    gap: 30px;
}

// Using flex instead grid to resolve cross browser issue
#body-wrapper>* {
    /* Each item takes 1/3 of the width minus the gap */
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

.category {
    background-color: #ffffff;
    position: relative;
    padding: 25px;
    height: 100%;
    width: 25%;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    img:first-child {
        margin-bottom: 20px;
    }

    .category-time {
        color: gray;
    }

    .info-icon {
        margin-top: 15px;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 5px;
    }

    .category-description {
        font-size: 14px;
        color: #888;
    }
}

.categories {
    width: 40%;
}

.divider-popular-categories {
    width: 80%;
    margin: 20px auto;
    border: 1px solid #ccc;
}

#background h2 {
    color: gray;
}

.no-style {
    text-decoration: none;
    color: inherit;
}

p {
    margin-bottom: 25px;
    color: #555;
}

h1 {
    margin-bottom: 15px;
    color: #333;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.leftButton,
.rightButton,
.maxIndexReachedLeft,
.maxIndexReachedRight {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    border: 2px solid white;
    background-color: transparent;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &.leftButton,
    &.maxIndexReachedLeft {
        left: 40px;
        transform: rotate(180deg);
    }

    &.rightButton,
    &.maxIndexReachedRight {
        right: 45px;
    }

    @media (max-width: 1360px) {
        display: none;
    }
}

.rightButton,
.leftButton,
.maxIndexReachedRight .maxIndexReachedLeft {
    &:hover {
        box-shadow: 0 0 10px 1px rgba(66, 203, 66, 0.7);
    }
}

.file {
    display: flex;
    text-align: center;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;

    p {
        margin-bottom: 20px;
        margin-left: 5px;
    }

}

.file-icon {
    width: 13px;
}

@media (max-width:880px) {
    .main-content {
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    .categories {
        width: 65%;
        margin-right: 50px;
    }

    .category {
        width: 70%;
    }
}
</style>