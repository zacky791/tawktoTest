<template>
    <nav class="refference">
        <router-link to="/" class="category-link">
            <p>All categories</p>
        </router-link>
        <p>></p>
        <p>{{ categoriesTitle }}</p>
    </nav>
</template>


<script>
export default {
    name: 'Navigation',
    props: {
        categoriesTitle: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.refference {
    display: flex;
    margin-left: 14%;
    margin-bottom: 0;

    .category-link {
        text-decoration: none;
        color: #3ba83b;
        font-size: 13px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            color: #3ba83b;
        }

        &:focus,
        &:active {
            outline: none;
        }
    }

    p:nth-child(1) {
        color: #3ba83b;
        font-size: 13px;
    }

    p:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
        color: gray;
        font-size: 13px;

    }

    p:nth-child(3) {
        color: gray;
        font-size: 13px;

    }
}
</style>