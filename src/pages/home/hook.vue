<template>
    <div>
        <slot :categoriesData="categoriesData"></slot>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            categoriesData: [],
        };
    },
    methods: {
        async fetchCategoriesData() {
            try {
                const response = await axios.get('http://localhost:9000/api/categories');
                const enabledDataOnly = response.data.filter(x => x.enabled === true);
                const sortData = enabledDataOnly.sort((a, b) => a.order - b.order);
                this.categoriesData = sortData
                console.log('Fetched category data:', this.categoriesData);
            } catch (error) {
                console.error('Error fetching category data', error);
                this.categoriesData = [];
            }
        },
    },
    mounted() {
        this.fetchCategoriesData();
    },
};
</script>
