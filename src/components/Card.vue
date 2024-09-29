<template>
    <router-link :to="{ name: 'category', params: { id: id } }" class="body-content no-style" @click.native="scrollToTop">
        <div>
            <img :src="image" alt="Icon" />
            <h3>{{ title }}</h3>
            <div>
                <p class="articles">{{ totalArticle }} articles</p>
                <p class="last-updated">Last update {{ lastUpdate }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Card',
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        totalArticle: {
            type: Number,
            required: true,
        },
        lastUpdate: {
            type: String,
            required: true,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.articles {
    color: #03A84E;
    margin-top: 25px;
    margin-bottom: 0;
}

.last-updated {
    font-size: 13px;
    color: gray;
    margin-top: 4px;
}
</style>
