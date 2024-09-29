<template>
    <div class="articles">
        <article>
            <img :src="fileIcon" />
            <div>
                <h3>{{ title }}</h3>
                <p>{{ formatDate(lastUpdate) }}</p>
            </div>
            <img :src="nextIcon" />
        </article>
    </div>
</template>

<script>
import fileIcon from '../assets/icons/file.svg';
import nextIcon from '../assets/icons/next-icon.svg';
import { format } from 'date-fns';

export default {
    name: 'ArticleCard',
    data: () => ({ fileIcon, nextIcon }),
    props: {
        title: {
            type: String,
            required: true
        },
        lastUpdate: {
            type: String,
            required: true
        },
    },
    methods: {
        formatDate(date) {
            return `Updated ${format(new Date(date), 'MMM, dd yyyy')}`;
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.articles article {
    width: 100%;
    padding: 25px;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.articles article img:first-child {
    margin-right: 20px;
}

.articles article img:last-child {
    margin-left: auto;
}

.articles article h3 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 0;
}

.articles article p {
    font-size: 12px;
    color: #666;
    margin: 0;
    color: gray;
}
</style>
