<template>
    <div class="layout layout-default">
        <div class="content">
            auth
            <router-view />
        </div>
        <loader v-if="isLoading" />
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import MainLoader from '@/components/misc/MainLoader.vue';

    export default {
        name: 'LayoutAuth',
        components: {
            'loader': MainLoader,
        },
        computed: {
            ...mapGetters([
                'isLoading',
            ]),
        },
    };
</script>
<style lang="scss">
</style>
