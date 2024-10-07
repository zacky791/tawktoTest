<template>
    <div>
        <slot :categoriesData="categoriesData"></slot>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const categoriesData = ref([]);

        const fetchCategoriesData = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/categories');
                const enabledDataOnly = response.data.filter(x => x.enabled === true);
                const sortData = enabledDataOnly.sort((a, b) => a.order - b.order);
                categoriesData.value = sortData;
                console.log('Fetched category data:', categoriesData.value);
            } catch (error) {
                console.error('Error fetching category data', error);
                categoriesData.value = [];
            }
        };

        onMounted(() => {
            fetchCategoriesData();
        });

        return {
            categoriesData,
        };
    },
};
</script>
