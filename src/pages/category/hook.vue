<template>
    <div>
        <slot :categoriesData="categoriesData" :categoryData="categoryData" :categoriesSuggestion="categoriesSuggestion">
        </slot>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            categoriesData: [],
            categoryData: {},
            categoriesSuggestion: [],
            categoryId: null,
        };
    },
    methods: {
        async fetchCategoriesData(id) {
            try {
                const response = await axios.get('http://localhost:9000/api/categories');
                const filterById = response.data.filter(x => x.id === id);
                const categoriesSuggestion = response.data.filter(x => x.id !== id && x.enabled === true);
                this.categoriesData = filterById[0] || {};
                this.categoriesSuggestion = categoriesSuggestion;
                this.$emit('updateCategoriesSuggestion', this.categoriesSuggestion);
            } catch (error) {
                console.error('Error fetching categories data', error);
                this.categoriesData = [];
            }
        },
        async fetchCategoryData(id) {
            try {
                const response = await axios.get(`http://localhost:9000/api/category/${id}`);
                const filterByStatus = response.data.filter(x => x.status === "published");
                this.categoryData = filterByStatus;
                console.log('Fetched category data:', this.categoryData);
            } catch (error) {
                console.error('Error fetching category data', error);
                this.categoryData = [];
            }
        },
    },
    mounted() {
        this.categoryId = this.$route.params.id;
        this.fetchCategoriesData(this.categoryId);
        this.fetchCategoryData(this.categoryId);
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(newId) {
                this.categoryId = newId;
                this.fetchCategoriesData(newId);
                this.fetchCategoryData(newId);
            }
        }
    }
};
</script>
