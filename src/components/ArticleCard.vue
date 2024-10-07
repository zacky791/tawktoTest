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
import { format } from 'date-fns';
import fileIcon from '../assets/icons/file.svg';
import nextIcon from '../assets/icons/next-icon.svg';

export default {
    name: 'ArticleCard',
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
    setup(props) {
        const formatDate = (date) => {
            return `Updated ${format(new Date(date), 'MMM, dd yyyy')}`;
        };

        return {
            fileIcon,
            nextIcon,
            formatDate,
            ...props
        };
    }
};
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

    img:first-child {
        margin-right: 20px;
    }

    img:last-child {
        margin-left: auto;
    }

    h3 {
        font-size: 15px;
        margin-bottom: 5px;
        margin-top: 0;
    }

    p {
        font-size: 12px;
        margin: 0;
        color: gray;
    }
}
</style>
