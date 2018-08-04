<template>
    <div id="app">
        <app-layout />
    </div>
</template>

<script>

import DefaultLayout from '@/layouts/Default.vue';

export default {
    components: {
        'app-layout': DefaultLayout,
    },
    created() {
        this.$store.commit('enableLoading');
    },
    mounted() {
        setTimeout(() => {
            this.$store.commit('disableLoading');
        }, 500);
    },
};

</script>

<style lang="scss">
</style>
