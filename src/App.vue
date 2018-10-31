<template>
    <div id="app">
        <default-layout v-if="isUserLogged" />
        <auth-layout v-else />
    </div>
</template>

<script>
    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import AuthLayout from '@/layouts/AuthLayout.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            DefaultLayout,
            AuthLayout
        },
        computed: {
            ...mapGetters(['isUserLogged'])
        }
    };

</script>

<style lang="scss">
@import '../scss/style';
</style>
