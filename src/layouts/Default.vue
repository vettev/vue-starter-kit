<template>
    <div class="layout">
        <div class="row">
            <div class="col-6">test1</div>
            <div class="col-6">test2</div>
        </div>
        <loader v-if="isLoading" />
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import MainLoader from '@/components/misc/MainLoader.vue';

export default {
    name: 'LayoutDefault',
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
